import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Code,
  Mail,
  MapPin,
  Phone,
  School,
  Users,
  Video,
} from "lucide-react";
import {
  getPastEvents,
  getProjects,
  getTeamMembers,
  getUpcomingEvents,
  getUpcomingPrograms,
  getPastPrograms,
} from "@/lib/data";
import EventCard from "@/components/event-card";
import TeamMemberCard from "@/components/team-member-card";
import { ContactForm } from "@/components/contact-form";
import { ScrollAnimation } from "@/components/scroll-animation";
import ProjectCard from "@/components/project-card";
import ProgramCard from "@/components/program-card";
import { Faq } from "@/components/faq";
import { Badge } from "@/components/ui/badge";
import { estateImage1, NoEvent } from "@/assets/images";

export const dynamic = "force-dynamic";

const journeyMilestones = [
  {
    date: "31st May 2021",
    description: "Started with the first 5 members on a WhatsApp group.",
  },
  {
    date: "18th September 2022",
    description: "Opened our official social media pages.",
    link: "https://web.facebook.com/share/19mhntSxoE/",
  },
  {
    date: "21st October 2022",
    description: "Held our first physical hangout.",
    link: "https://web.facebook.com/share/p/1634LQQiha/",
  },
  {
    date: "31st October 2022",
    description: "Reached 200 members.",
    link: "https://web.facebook.com/share/p/17J7wwi6mj/",
  },
  {
    date: "21st December 2022",
    description: "Hosted our second physical hangout.",
    link: "https://web.facebook.com/share/v/17AmVi8bAT/",
  },
  {
    date: "30th December 2023",
    description: "Organized our third physical hangout.",
    link: "https://web.facebook.com/share/r/19rEFESRnq/",
  },
  {
    date: "16th May 2024",
    description: "Launched our first School Storm (Tech in School Initiative).",
    link: "https://www.instagram.com/reel/DNTtbYmIwa1",
  },
  {
    date: "2025",
    description: "Crossed 1,000+ registered members in our growing community.",
  },
  {
    date: "School Tech Storm (2025)",
    description:
      "Our flagship tech awareness program outreach for secondary schools. In 2025, we successfully reached over 400+ SS class students across two schools, improving awareness of tech careers and sparking interest in digital skills.",
    link: "https://www.instagram.com/reel/DNTtbYmIwa1/?utm_source=ig_web_copy_link",
  },
  {
    date: "Calabar Tech Conference 2025 - 5-6 December 2025",
    description:
      "Calabar Tech Conference was the largest gathering of innovators, tech enthusiasts, startups, and investors in Cross River State, Nigeria.",
    link: "https://calabartechconf.ng/",
  },
  {
    date: "8th March 2026",
    description:
      "Hosted IWD 2026: Give to Gain, celebrating women in tech with a virtual session on leadership, technical growth, and inclusive spaces.",
  },
  {
    date: "24th - 25th March 2026",
    description:
      "Expanded School Tech Storm outreach to 4-5 schools, introducing more students to tech careers, digital skills, and future opportunities.",
    link: "https://www.instagram.com/reel/DW8JzAegeLX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export default function Home() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const featuredUpcomingEvents = upcomingEvents.slice(0, 3);
  const featuredPastEvents = pastEvents.slice(0, 3);

  const featuredProjects = getProjects().slice(0, 3);
  const featuredMembers = getTeamMembers().slice(0, 4);
  const upcomingPrograms = getUpcomingPrograms();
  const pastPrograms = getPastPrograms();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <ScrollAnimation>
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] text-center relative flex flex-col items-center">
            <Link
              href="https://calabartechconf.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 mb-10 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base lg:text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40 transition-all duration-300 ring-4 ring-primary/30 ring-offset-4 ring-offset-background"
            >
              <span className="text-xl animate-pulse">🚀</span>
              Register for Calabar Tech Conference
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-primary">
              Welcome to Calabar Tech Community
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              The heart of technology and innovation in Calabar, Nigeria. Join
              us to learn, build, and grow together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Link href="/events">Explore Event</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <ScrollAnimation animation="fade-in-up">
        <section
          id="upcoming-programs"
          className="py-20 md:py-28 bg-background"
        >
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Upcoming Programs
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                Don&apos;t miss our next big initiatives.
              </p>
            </div>
            {upcomingPrograms.length > 0 ? (
              <div className="space-y-12">
                {upcomingPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="relative rounded-lg overflow-hidden bg-card shadow-lg p-8 md:p-12 border border-border/50"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden order-1 md:order-2">
                        <Image
                          src={program.imageUrl}
                          alt={program.title}
                          data-ai-hint={program.imageHint}
                          fill
                          className={`${program.title.toLowerCase().includes("iwd 2026")} object-cover
                          `}
                        />
                      </div>
                      <div className="text-center md:text-left order-2 md:order-1">
                        <Badge>Upcoming</Badge>
                        <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary mt-2">
                          {program.title}
                        </h3>
                        <p className="mt-4 text-lg text-muted-foreground">
                          {program.description}
                        </p>
                        {program.details.date && (
                          <p className="mt-2 font-semibold text-primary">
                            {program.details.date}
                          </p>
                        )}
                        <div className="mt-6">
                          {program.registrationLink && !program.useModal ? (
                            <Button asChild size="lg">
                              <a href={program.registrationLink} target="_blank" rel="noopener noreferrer">
                                {program.registrationButtonText || "Register Now"} <ArrowRight className="ml-2" />
                              </a>
                            </Button>
                          ) : program.details.videoUrl ? (
                            <Button asChild size="lg">
                              <Link href={program.details.videoUrl}>
                                Learn More <ArrowRight className="ml-2" />
                              </Link>
                            </Button>
                          ) : (
                            <Button asChild size="lg">
                              <Link href="/programs">
                                Program Details <ArrowRight className="ml-2" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 md:py-20">
                <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-lg">
                  <Image
                    src={NoEvent}
                    alt="No upcoming programs"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">
                  No Upcoming Programs
                </h3>
                <p className="text-lg text-muted-foreground text-center max-w-2xl mb-8">
                  We&apos;re currently planning our next initiatives. Check back
                  soon for exciting announcements!
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="past-programs" className="py-20 md:py-28 bg-card">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Highlights from Past Programs
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                A look back at our impactful events and initiatives.
              </p>
            </div>

            {pastPrograms.length > 0 ? (
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                {pastPrograms.map((program) => (
                  <div key={program.id} className="mx-auto w-full max-w-lg">
                    <ProgramCard program={program} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border rounded-xl bg-background/50">
                <p className="text-lg text-muted-foreground">
                  No past programs to show yet.
                </p>
              </div>
            )}

            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/programs">See All Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section id="about" className="py-20 md:py-28 bg-background">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
                  About Our Community
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Calabar Tech Community is a vibrant and inclusive space for
                  tech enthusiasts, professionals, and learners in Calabar,
                  Nigeria. We’re dedicated to driving innovation, collaboration,
                  and growth across the local tech ecosystem.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex flex-col items-center md:flex-row md:items-start md:text-left gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="max-w-[400px]">
                      <h3 className="font-semibold text-lg">Regular Events</h3>
                      <p className="text-muted-foreground">
                        From meetups to hackathons, we host a variety of events
                        to bring the community together.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:flex-row md:items-start md:text-left gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Code className="h-6 w-6" />
                    </div>
                    <div className="max-w-[400px]">
                      <h3 className="font-semibold text-lg">
                        Collaborative Projects
                      </h3>
                      <p className="text-muted-foreground">
                        We encourage and support community-led projects that
                        solve real-world problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:flex-row md:items-start md:text-left gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="max-w-[400px]">
                      <h3 className="font-semibold text-lg">
                        Mentorship & Growth
                      </h3>
                      <p className="text-muted-foreground">
                        Learn from experienced members and accelerate your
                        career in tech.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left mt-10">
                  <Button asChild variant="outline">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/sirsuccess/image/upload/v1757840903/IMG_6884_1_1_dzwm64.jpg"
                  alt="Community members collaborating"
                  data-ai-hint="collaboration team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="journey" className="py-20 md:py-28 bg-card">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="mb-0">
              <h2 className="text-3xl font-headline font-semibold text-center mb-12">
                Our Journey 🚀
              </h2>
              <div className="relative max-w-4xl mx-auto md:space-y-16">
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border hidden md:block"
                  aria-hidden="true"
                ></div>
                <div className="md:space-y-0 space-y-12">
                  {journeyMilestones.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-center md:even:flex-row-reverse"
                    >
                      <div className="hidden md:block w-1/2"></div>
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full ring-8 ring-background"></div>
                      <div className="w-full md:w-1/2 md:px-8">
                        <div className="relative">
                          <div
                            className="md:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-full bg-border"
                            aria-hidden="true"
                          ></div>
                          <div className="md:hidden absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full ring-4 ring-background"></div>
                          <div className="p-6 bg-card rounded-lg border shadow-md text-left">
                            <h3 className="font-headline font-semibold text-primary">
                              {item.date}
                            </h3>
                            <p className="text-muted-foreground mt-1">
                              {item.description}
                            </p>
                            {item.link && (
                              <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline mt-2 inline-block"
                              >
                                Learn More
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-12 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                From a small WhatsApp group to 1,000+ members, Calabar Tech
                Community has become a thriving ecosystem for innovation,
                learning, and collaboration.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="events" className="py-20 md:py-28 bg-background">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Events
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                What&apos;s next for the community, and what we&apos;ve already
                done.
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-headline font-bold">
                    Upcoming Events
                  </h3>
                  <div className="h-px flex-1 bg-border hidden sm:block"></div>
                </div>

                {featuredUpcomingEvents.length > 0 ? (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredUpcomingEvents.map((event) => (
                      <div key={event.id} className="mx-auto w-full max-w-lg">
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 border rounded-xl bg-card/50">
                    <p className="text-lg text-muted-foreground">
                      No upcoming events scheduled at the moment.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Check back soon for updates.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-headline font-bold text-muted-foreground">
                    Past Events
                  </h3>
                  <div className="h-px flex-1 bg-border/50 hidden sm:block"></div>
                </div>

                {featuredPastEvents.length > 0 ? (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-90">
                    {featuredPastEvents.map((event) => (
                      <div key={event.id} className="mx-auto w-full max-w-lg">
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 border rounded-xl bg-card/50">
                    <p className="text-lg text-muted-foreground">
                      No past events to show yet.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="team" className="py-20 md:py-28 bg-background">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Meet the Team
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                The dedicated individuals making the Calabar Tech Community a
                reality.
              </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
              {featuredMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/team">See Full Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="faq" className="py-20 md:py-28 bg-card">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                Find answers to common questions about our community.
              </p>
            </div>
            <div className="flex justify-center">
              <Faq />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in-up">
        <section id="contact" className="py-20 md:py-28 bg-background">
          <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Get In Touch
              </h2>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                Have a question, suggestion, or partnership proposal? We&apos;d
                love to hear from you.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <h3 className="text-2xl font-headline font-semibold mb-8 text-center">
                  Contact Information
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-muted-foreground">
                        calabartechcomm@gmail.com
                      </p>{" "}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-muted-foreground">+234 816 091 6203</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Our Location</h4>
                      <p className="text-muted-foreground">Calabar, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
