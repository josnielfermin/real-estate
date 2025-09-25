"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Content } from "@/components/content";

export const Pros = () => {
  const { title, subtitle, items } = Content.pros;

  // refs for each card
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [fullyVisible, setFullyVisible] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    // IntersectionObserver to detect when element is fully inside the viewport
    const obs = new IntersectionObserver(
      (entries) => {
        // update state for each observed entry
        setFullyVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx === -1) return;
            // consider fully visible when intersectionRatio is 1 (completely inside viewport)
            next[idx] = entry.intersectionRatio >= 0.999;
          });
          return next;
        });
      },
      {
        root: null, // viewport
        threshold: [0, 0.5, 0.999, 1],
      }
    );

    // observe each item
    itemRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    // cleanup
    return () => {
      obs.disconnect();
    };
  }, [items.length]);

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <span className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </span>{" "}
          <span className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </span>
        </div>

        <div
          ref={containerRef}
          className="flex items-center gap-[clamp(0.5rem,_-1.375rem_+_3.906vw,_3.313rem)] w-full flex-nowrap overflow-x-scroll py-2 hide-scrollbar"
        >
          {items.map((it: any, idx: number) => (
            <article
              key={idx}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[idx] = el;
              }}
              className="relative rounded-lg overflow-hidden shadow-lg bg-base-1 w-full h-[clamp(11.75rem,_2.917rem_+_18.403vw,_25rem)] min-w-[141px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                />

                {/* base gradient overlay (below dark-mask, below text) */}
                <div
                  className="absolute inset-0 z-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.0) 30%, var(--color-base-1) 100%)",
                  }}
                />

                {/* dark mask that appears when the card is NOT fully inside viewport */}
                <div
                  aria-hidden
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 ${
                    fullyVisible[idx] ? "opacity-0" : "opacity-60 bg-black"
                  }`}
                />

                {/* text overlay above the masks */}
                <div className="absolute left-0 bottom-0 right-0 z-20 bg-[rgba(0,0,0,0.30)] backdrop-blur-[10px] px-[clamp(0.563rem,_0.146rem_+_0.868vw,_1.188rem)] py-[clamp(0.75rem,_0.25rem_+_1.042vw,_1.5rem)] max-h-[clamp(3.875rem,_0.917rem_+_6.163vw,_8.313rem)]">
                  <h4 className="text-white font-bold text-[clamp(0.625rem,_0.208rem_+_0.868vw,_1.25rem)]">
                    {it.title}
                  </h4>
                  <p className="text-white text-[clamp(0.375rem,_0.042rem_+_0.694vw,_0.875rem)] mt-1">
                    {it.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pros;
