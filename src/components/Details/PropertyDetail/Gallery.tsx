"use client";

import Image from "next/image";
import React from "react";

type Props = {
  gallery: string[];
  active: number;
  setActive: (i: number) => void;
  title?: string;
};

const Gallery: React.FC<Props> = ({ gallery, active, setActive, title }) => {
  if (!Array.isArray(gallery) || gallery.length === 0) return null;

  return (
    <article className="rounded-2xl overflow-hidden bg-[var(--color-base-1)] p-4">
      <div className="w-full rounded-xl overflow-hidden relative">
        <div className="w-full h-[520px] relative">
          <Image
            src={gallery[active]}
            alt={`${title ?? ""} image ${active + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {gallery.map((g, i) => (
          <button
            key={g + i}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`rounded-md overflow-hidden border-2 ${
              active === i
                ? "border-[var(--color-primary-1)]"
                : "border-transparent"
            }`}
            style={{ width: 84, height: 56 }}
          >
            <Image
              src={g}
              alt={`Thumbnail ${i + 1}`}
              width={84}
              height={56}
              className="object-cover"
              priority={i === 0}
            />
          </button>
        ))}
      </div>
    </article>
  );
};

export default Gallery;
