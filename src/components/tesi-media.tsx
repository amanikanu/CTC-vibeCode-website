'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type TesiMediaProps = {
  title: string;
  badge: string;
  image?: StaticImageData;
  videoUrl?: string;
};

export function TesiMedia({ title, badge, image, videoUrl }: TesiMediaProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && videoUrl) {
    const src = videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;

    return (
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  if (videoUrl && image) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group absolute inset-0 h-full w-full cursor-pointer"
        aria-label={`Play ${title} video`}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
        <span className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground font-semibold px-3 py-1 backdrop-blur">
            {badge}
          </Badge>
        </span>
      </button>
    );
  }

  if (image) {
    return (
      <>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="pointer-events-none absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground font-semibold px-3 py-1 backdrop-blur">
            {badge}
          </Badge>
        </div>
      </>
    );
  }

  return null;
}
