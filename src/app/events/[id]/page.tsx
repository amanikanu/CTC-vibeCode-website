
import { getEventById, getEvents } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { parseDate, startOfDay } from "@/lib/date";

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(await params.id);

  if (!event) {
    notFound();
  }

  const eventDate = parseDate(event.date);
  const isUpcoming = eventDate
    ? startOfDay(eventDate).getTime() >= startOfDay(new Date()).getTime()
    : false;
  const displayDate =
    event.dateLabel ||
    (eventDate
      ? eventDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : event.date);

  return (
    <div className="bg-background">
      <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8 shadow-lg">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    data-ai-hint={event.imageHint}
                    fill
                    className="object-cover"
                />
            </div>

            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">{event.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{event.description}</p>
            
            {event.speakers.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-headline font-semibold mb-4">Speakers</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {event.speakers.map((speaker) => (
                            <Card key={speaker.name} className="bg-card">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={speaker.imageUrl} alt={speaker.name} data-ai-hint={speaker.imageHint} />
                                        <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{speaker.name}</p>
                                        <p className="text-sm text-muted-foreground">{speaker.title}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {event.resources && (
                <div className="mb-8">
                    <h2 className="text-2xl font-headline font-semibold mb-4">Resources</h2>
                    <p className="text-muted-foreground">{event.resources}</p>
                </div>
            )}
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-muted-foreground">{displayDate}</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>

                {isUpcoming && event.registrationUrl && (
                  <div className="pt-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        Register Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
