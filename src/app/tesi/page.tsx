import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, GraduationCap, Code2, Rocket, ArrowRight } from "lucide-react";

export default function TesiPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/40">
        <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Calabar Tech Community Initiative
            </Badge>

            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-foreground">
              Tech Evangelist Skill-Up Initiative <span className="text-primary font-extrabold">(TESI)</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Empowering the next generation of tech leaders, developers, and innovators through practical training, mentorship, and real-world project experience.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  Partner with Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Placeholder Section */}
      <section className="py-16 md:py-24">
        <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Skill Acquisition</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on workshops, bootcamps, and masterclasses designed to build industry-ready technical skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Mentorship & Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Direct connection with experienced software engineers, designers, and tech evangelists.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Career Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Portfolio reviews, interview preparation, and opportunities to showcase projects to top employers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Notice Box */}
          <div className="p-8 md:p-12 rounded-2xl bg-muted/40 border border-border text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
              TESI Program Details Coming Soon!
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We are finalizing full curriculum tracks, schedules, and registration details for the Tech Evangelist Skill-Up Initiative. Stay connected for updates!
            </p>
            <div className="pt-2">
              <Button asChild variant="default" size="default">
                <Link href="/contact">Get Notified When Registration Opens</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
