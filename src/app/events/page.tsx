import EventCard from "@/components/event-card";
import ProgramCard from "@/components/program-card";
import { getPastEvents, getUpcomingEvents, getPrograms } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarX, Sparkles, Bell, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const programs = getPrograms();

  return (
    <div className="bg-background">
      <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] py-12 md:py-20 lg:py-24">
        {/* Page Hero */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
              Events & Programs
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Discover our upcoming meetups, workshops, hackathons, and outreach programs. Join us to learn, connect, and innovate together.
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <Image
              src="https://res.cloudinary.com/sirsuccess/image/upload/v1757841641/IMG_7042_1_etbqqb.jpg"
              alt="Calabar Tech Community members at an event"
              data-ai-hint="tech community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-24">
          {/* Upcoming Events Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-headline font-bold">
                Upcoming Events
              </h2>
              <div className="h-px flex-1 bg-border hidden sm:block"></div>
            </div>
            {upcomingEvents.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <Card className="border-border/60 bg-gradient-to-br from-card via-background to-muted/40 shadow-md">
                <CardContent className="flex flex-col items-center justify-center py-12 md:py-16 text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 ring-8 ring-primary/5">
                    <CalendarX className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-3">
                    No Upcoming Events for Now
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                    We&apos;re currently planning our next exciting meetups and hands-on workshops. Check back later or get in touch to stay updated!
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button asChild variant="default" size="lg" className="rounded-full px-6">
                      <Link href="/contact">
                        <Bell className="mr-2 h-4 w-4" /> Get Notified
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                      <Link href="/tis">
                        Explore Tech in School <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Past Events Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-headline font-bold text-foreground">
                Past Events & Hangouts
              </h2>
              <div className="h-px flex-1 bg-border/50 hidden sm:block"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Community Programs Section */}
          {programs.length > 0 && (
            <section className="pt-8">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-headline font-bold text-foreground">
                  Community Programs
                </h2>
                <div className="h-px flex-1 bg-border/50 hidden sm:block"></div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

