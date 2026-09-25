import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AiContentRoster } from '@/components/ai-content-roster';
import {
  aiContentFacilitator,
  aiContentLead,
  aiContentParticipants,
} from '@/lib/ai-content-cohort';

export const metadata: Metadata = {
  title: 'AI Realistic Content Creation',
  description:
    'Meet the lead, facilitator, and participants of the TESI AI Realistic Content Creation cohort.',
};

export default function AiContentParticipantPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto w-[90%] max-w-[1440px] py-12 md:w-4/5 md:py-16">
        <Link
          href="/tesi"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TESI
        </Link>

        <div className="mb-12 max-w-3xl space-y-4">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 uppercase tracking-wide">
            AI & Innovation
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            AI Realistic Content Creation
          </h1>
          <p className="text-lg text-muted-foreground">
            The lead, facilitator, and participants from this TESI cohort.
          </p>
        </div>

        <div className="space-y-16">
          <AiContentRoster
            lead={aiContentLead}
            facilitator={aiContentFacilitator}
            participants={aiContentParticipants}
          />
        </div>
      </div>
    </div>
  );
}
