'use client';

import { useState } from 'react';
import { ExternalLink, Linkedin, Play } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { AiContentParticipant, CohortStaff } from '@/lib/ai-content-cohort';

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function toEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = parsed.pathname.split('/').filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = parsed.searchParams.get('v') ?? parsed.pathname.split('/').filter(Boolean).pop();
      if (parsed.pathname.includes('/embed/') && id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (host === 'drive.google.com') {
      if (parsed.pathname.includes('/preview')) return url;
      const id = parsed.searchParams.get('id') ?? parsed.pathname.match(/\/d\/([^/]+)/)?.[1];
      if (id) return `https://drive.google.com/file/d/${id}/preview`;
    }
  } catch {
    return url;
  }

  return url;
}

function ProfilePhoto({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <Avatar className="h-24 w-24 border-2 border-primary/20">
      {imageUrl ? (
        <AvatarImage src={imageUrl} alt="" referrerPolicy="no-referrer" className="object-cover" />
      ) : null}
      <AvatarFallback className="bg-primary/10 text-lg font-semibold text-foreground">
        {initials(name)}
      </AvatarFallback>
    </Avatar>
  );
}

function StaffCard({ person, role }: { person: CohortStaff; role: string }) {
  return (
    <Card className="h-full border-border/70 bg-card">
      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
        <Badge variant="outline" className="border-primary/40 bg-primary/10 uppercase tracking-wide">
          {role}
        </Badge>
        <ProfilePhoto name={person.name} imageUrl={person.imageUrl} />
        <div className="space-y-2">
          <h3 className="font-headline text-2xl font-bold">{person.name}</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
        </div>
        {person.linkedinUrl ? (
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}

function ParticipantCard({
  participant,
  onWatch,
}: {
  participant: AiContentParticipant;
  onWatch: (participant: AiContentParticipant) => void;
}) {
  return (
    <Card className="h-full border-border/70 bg-card">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <ProfilePhoto name={participant.name} imageUrl={participant.imageUrl} />
        <div className="space-y-2">
          <h3 className="font-headline text-xl font-bold">{participant.name}</h3>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{participant.bio}</p>
        </div>
        <div className="mt-auto space-y-3 pt-2">
          {participant.linkedinUrl ? (
            <a
              href={participant.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          ) : null}
          {participant.portfolioUrl ? (
            <a
              href={participant.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Portfolio
            </a>
          ) : null}
          {participant.videoUrl ? (
            <Button type="button" className="rounded-full" onClick={() => onWatch(participant)}>
              <Play className="h-4 w-4 fill-current" />
              Watch video
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export function AiContentRoster({
  lead,
  facilitator,
  participants,
}: {
  lead: CohortStaff | null;
  facilitator: CohortStaff | null;
  participants: AiContentParticipant[];
}) {
  const [activeVideo, setActiveVideo] = useState<AiContentParticipant | null>(null);
  const staff = [
    lead ? { person: lead, role: 'Lead' } : null,
    facilitator ? { person: facilitator, role: 'Facilitator' } : null,
  ].filter((item): item is { person: CohortStaff; role: string } => item !== null);

  return (
    <>
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-headline text-3xl font-bold">Lead & Facilitator</h2>
          <p className="text-muted-foreground">The people guiding this cohort.</p>
        </div>
        {staff.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {staff.map(({ person, role }) => (
              <StaffCard key={role} person={person} role={role} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-border px-6 py-10 text-center text-muted-foreground">
            Lead and facilitator profiles will appear here.
          </p>
        )}
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-headline text-3xl font-bold">Participants</h2>
          <p className="text-muted-foreground">
            {participants.length > 0
              ? `${participants.length} ${participants.length === 1 ? 'person' : 'people'} in this cohort.`
              : 'Cohort profiles will appear here.'}
          </p>
        </div>
        {participants.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {participants.map((participant) => (
              <ParticipantCard
                key={participant.name}
                participant={participant}
                onWatch={setActiveVideo}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-border px-6 py-10 text-center text-muted-foreground">
            Participant profiles will appear here.
          </p>
        )}
      </section>

      <Dialog open={activeVideo !== null} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0">
          <DialogHeader className="px-6 pb-4 pr-12 pt-6">
            <DialogTitle>{activeVideo?.name}</DialogTitle>
            <DialogDescription>Video about {activeVideo?.name}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {activeVideo?.videoUrl ? (
              <iframe
                src={toEmbedUrl(activeVideo.videoUrl)}
                title={`Video about ${activeVideo.name}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
