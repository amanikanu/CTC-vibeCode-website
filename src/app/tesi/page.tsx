import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  GraduationCap,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { tesiAiUgc, tesiShoeMaking, tesiVideoEditing } from "@/assets/images";
import { TesiMedia } from "@/components/tesi-media";
import type { StaticImageData } from "next/image";

type TesiInitiative = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
  image?: StaticImageData;
  videoUrl?: string;
  involveHref?: string;
};

const tesiInitiatives: TesiInitiative[] = [
  {
    id: "ai-ugc-video",
    title: "AI Realistic Content Creation",
    subtitle: "AI-Powered Video & AI image creation, monetization, and social media strategy",
    description:
      "Explore the frontier of content creation by combining artificial intelligence scriptwriting, voice synthesis, digital avatars, and high-converting UGC video.",
    image: tesiAiUgc,
    videoUrl: "https://www.youtube.com/embed/86BsOhENglg",
    involveHref: "/tesi/ai-content-participant",
    badge: "AI & Innovation",
    highlights: [
      "AI script generation & hook optimization",
      "Synthetic avatars & voice cloning tools",
      "Automated captioning, dynamic editing, and visual hooks",
      "Monetizing UGC video assets for global brands"
    ],
  },
  {
    id: "shoe-making",
    title: "Shoe Making and Branding",
    subtitle: "Craftsmanship Meets Modern Digital Branding",
    description:
      "A hands-on training initiative empowering youth to master footwear production, leather craft design, digital product modeling, and online store management.",
    image: tesiShoeMaking,
    videoUrl: "https://www.youtube.com/embed/N-EHmAUfDvA",
    badge: "Craftsmanship & Tech",
    highlights: [
      "Footwear design & precision leather crafting",
      "Digital pattern design & 3D prototyping concepts",
      "E-commerce store setup & social media branding",
      "Business management & supply chain strategy"
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "Professional Digital Storytelling & Production",
    description:
      "An intensive skill-up track teaching commercial video editing, timeline assembly, color grading, motion graphics, and audio post-production for modern media.",
    image: tesiVideoEditing,
    badge: "Creative Media",
    highlights: [
      "Industry-standard editing software workflows",
      "Color grading, audio tuning, and cinematic transitions",
      "Short-form content optimization (Reels, TikTok, Shorts)",
      "Portfolio project development & client pitch strategies"
    ],
  },
  
];

export default function TesiPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.07]" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto w-[90%] max-w-[1440px] py-16 md:w-4/5 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <Badge
                variant="outline"
                className="mb-6 gap-2 border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Tech Evangelist Skill-Up Initiative
              </Badge>

              <h1 className="font-headline text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Learn a Skill.
                <span className="mt-1 block text-primary">Build Real Projects.</span>
                <span className="mt-1 block">Create a Portfolio.</span>
                <span className="mt-1 block">Start Earning.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
                TESI equips young people with practical skills in AI, digital media, craftsmanship, entrepreneurship, and monetization through hands-on training and mentorship.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                <Button asChild size="lg" className="h-12 rounded-full px-8 shadow-lg shadow-primary/25">
                  <Link href="#initiatives">
                    Explore Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-border/80 bg-background/80 px-8 backdrop-blur">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-primary/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-2xl shadow-black/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(232,184,109,0.45),transparent_48%)]" />
                <div className="relative px-8 pb-4 pt-10 sm:px-10">
                  <Image
                    src="/tesi-mark.png"
                    alt="TESI"
                    width={1400}
                    height={990}
                    priority
                    className="mx-auto h-auto w-full max-w-[440px]"
                  />
                </div>
                <div className="relative grid grid-cols-3 border-t border-black/5 bg-white/80">
                  {tesiInitiatives.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="border-r border-black/5 px-3 py-4 text-center transition-colors last:border-r-0 hover:bg-primary/15"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{item.badge}</p>
                      {/* <p className="mt-1 text-xs font-semibold leading-snug text-zinc-900 sm:text-sm">{item.title}</p> */}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-12 md:py-16 bg-card/40 border-b border-border/40">
        <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Practical Skill-Up</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on bootcamps and intensive workshops designed to deliver real-world production experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Mentorship & Tech</h3>
                <p className="text-sm text-muted-foreground">
                  Direct connection with industry experts, tech evangelists, and creative leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">Market & Monetization</h3>
                <p className="text-sm text-muted-foreground">
                  Equipping participants to launch products, build portfolios, and monetize creative skills globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3 TESI Initiatives Showcase */}
      <section id="initiatives" className="py-20 md:py-28">
        <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px] space-y-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 text-xs font-semibold tracking-wide uppercase">
              Past Program 
            </Badge>
            <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
              TESI Specialized Initiatives
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the passed program launched under the Tech Evangelist Skill-Up Initiative to foster craftsmanship, digital creation, and AI innovation.
            </p>
          </div>

          <div className="grid gap-12">
            {tesiInitiatives.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Card
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-24 overflow-hidden border-border/70 bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`grid lg:grid-cols-12 gap-0 items-center ${isEven ? "" : ""}`}>
                    {/* Image Container */}
                    <div className={`relative h-72 lg:h-full min-h-[320px] lg:col-span-6 overflow-hidden bg-black ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <TesiMedia
                        title={item.title}
                        badge={item.badge}
                        image={item.image}
                        videoUrl={item.videoUrl}
                      />
                    </div>

                    {/* Content Container */}
                    <div className={`p-8 md:p-10 lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-primary">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-muted-foreground text-base leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-sm font-bold tracking-wider uppercase text-foreground">
                          Key Learning Modules & Outcomes:
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2.5">
                          {item.highlights.map((point, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Button asChild variant="default" className="rounded-full px-6">
                          <Link href={item.involveHref ?? "/contact"}>
                            Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action Banner */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/15 via-primary/5 to-card border border-primary/20 text-center space-y-6 shadow-md">
            <h2 className="text-2xl md:text-4xl font-headline font-bold text-foreground">
              Interested in Joining or Sponsoring a TESI Track?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Whether you want to enroll in an upcoming cohort, mentor participants, or partner with us, we&apos;d love to connect with you!
            </p>
            <div>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Contact TESI Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
