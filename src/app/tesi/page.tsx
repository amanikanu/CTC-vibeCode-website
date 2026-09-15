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
import { tesiShoeMaking, tesiVideoEditing, tesiAiUgc } from "@/assets/images";

const tesiInitiatives = [
  {
    id: "shoe-making",
    title: "Shoe Making",
    subtitle: "Craftsmanship Meets Modern Digital Branding",
    description:
      "A hands-on training initiative empowering youth to master footwear production, leather craft design, digital product modeling, and online store management.",
    image: tesiShoeMaking,
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
  {
    id: "ai-ugc-video",
    title: "AI UGC Video Creation",
    subtitle: "Next-Gen AI-Powered Video & Avatar Generation",
    description:
      "Explore the frontier of content creation by combining artificial intelligence scriptwriting, voice synthesis, digital avatars, and high-converting UGC video ads.",
    image: tesiAiUgc,
    badge: "AI & Innovation",
    highlights: [
      "AI script generation & hook optimization",
      "Synthetic avatars & voice cloning tools",
      "Automated captioning, dynamic editing, and visual hooks",
      "Monetizing UGC video assets for global brands"
    ],
  },
];

export default function TesiPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/40">
        <div className="w-[90%] md:w-4/5 mx-auto max-w-[1440px]">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-foreground">
              Tech Evangelist Skill-Up Initiative <span className="text-primary font-extrabold">(TESI)</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Empowering individuals with practical, high-demand skills combining technology, creative arts, and entrepreneurship to drive sustainable economic growth.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#initiatives">
                  Explore Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/contact">Partner With Us</Link>
              </Button>
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
              Program Tracks
            </Badge>
            <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
              TESI Specialized Initiatives
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the three core tracks launched under the Tech Evangelist Skill-Up Initiative to foster craftsmanship, digital creation, and AI innovation.
            </p>
          </div>

          <div className="grid gap-12">
            {tesiInitiatives.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <Card
                  key={item.id}
                  className="overflow-hidden border-border/70 bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`grid lg:grid-cols-12 gap-0 items-center ${isEven ? "" : ""}`}>
                    {/* Image Container */}
                    <div className={`relative h-72 lg:h-full min-h-[320px] lg:col-span-6 overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground font-semibold px-3 py-1 backdrop-blur">
                          {item.badge}
                        </Badge>
                      </div>
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
                          <Link href="/contact">
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
