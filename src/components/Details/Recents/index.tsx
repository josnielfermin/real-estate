"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const Recents = () => {
  // Prefer explicit recent collection; fall back to properties array
  const source =
    (Content as any).recent?.items || (Content as any).properties || [];

  // Normalize entries into a predictable shape: { title, image, description, address, href }
  const normalized = (source || [])
    .map((el: any) => {
      if (!el) return null;

      // If this entry already looks like a property object with title + image, use directly
      if (
        el.title &&
        (el.image || el.gallery || el.subtitle || el.description)
      ) {
        const firstText = (() => {
          if (el.description) return el.description;
          if (Array.isArray(el.items)) {
            const t = el.items.find((it: any) => it.type === "text");
            return t ? t.text : undefined;
          }
          return el.subtitle || el.addressDescription || undefined;
        })();

        return {
          title: el.title,
          image:
            el.image ||
            (el.gallery && el.gallery[0]) ||
            "/static/images/premium-properties/calvalli-tower.png",
          description: firstText || "Premium apartment in Dubai",
          address: el.addressDescription || "Dubai, UAE",
          href: el.href || "/details",
        };
      }

      // If entry is nested (e.g., properties array from content), try to extract
      const title = el.title || el.name || "Property";
      const firstText = (() => {
        if (Array.isArray(el.items)) {
          const t = el.items.find((it: any) => it.type === "text");
          if (t) return t.text;
          const list = el.items.find((it: any) => it.type === "list");
          if (list && Array.isArray(list.items))
            return list.items.slice(0, 2).join(" • ");
        }
        return el.subtitle || el.description || "Premium apartment in Dubai";
      })();

      return {
        title,
        image:
          el.image ||
          (el.gallery && el.gallery[0]) ||
          "/static/images/premium-properties/calvalli-tower.png",
        description: firstText,
        address: el.address || el.location || "Dubai, UAE",
        href: "/details",
      };
    })
    .filter(Boolean);

  const displayed = normalized.slice(0, 5);
  if (!displayed || displayed.length === 0) return null;

  // refs for each card
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const [fullyVisible, setFullyVisible] = useState<boolean[]>(
    new Array(displayed.length).fill(false)
  );

  // reset visibility array when number of displayed items changes
  useEffect(() => {
    setFullyVisible(new Array(displayed.length).fill(false));
    // ensure itemRefs array has the proper length
    itemRefs.current = itemRefs.current.slice(0, displayed.length);
  }, [displayed.length]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // observer uses the scrolling container as root and threshold 1 (fully inside)
    const obs = new IntersectionObserver(
      (entries) => {
        setFullyVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx === -1) return;
            next[idx] = entry.intersectionRatio >= 0.999; // fully visible inside container
          });
          return next;
        });
      },
      {
        root,
        threshold: [1],
      }
    );

    // observe each item (only those we have in displayed)
    itemRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [displayed.length]);

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-6 flex max-md:flex-col md:items-center gap-2 text-[clamp(1.5rem,_1.167rem_+_0.694vw,_2rem)]">
          <h3 className="text-white font-medium leading-[1.1]">
            {Content.recent.title}
          </h3>
          <h2 className="text-white font-bold mt-1 leading-[1.1]">
            {Content.recent.subtitle}
          </h2>
        </div>

        <div
          ref={containerRef}
          className="flex items-center gap-[clamp(0.5rem,_0.167rem_+_0.694vw,_1rem)] w-full flex-nowrap overflow-x-scroll py-2 hide-scrollbar"
        >
          {displayed.map((p: any, idx: number) => (
            <article
              ref={(el: HTMLElement | null) => {
                itemRefs.current[idx] = el;
              }}
              key={p.title + idx}
              className="!bg-[rgba(0,_0,_0,_0.20)] relative rounded-[20px] overflow-hidden shadow-lg bg-base-1 w-full h-[clamp(24.313rem,_22.354rem_+_4.08vw,_27.25rem)] min-w-[290px] group"
            >
              <div className="w-full h-40 rounded-md overflow-hidden bg-gray-800">
                <Image
                  src={p.image}
                  alt={p.title || "Property"}
                  width={600}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-110 transition-all !duration-300"
                  priority={idx < 2}
                />
              </div>

              {/* dark mask that appears when the card is NOT fully inside viewport */}
              <div
                aria-hidden
                className={`absolute inset-0 pointer-events-none transition-all !duration-300 z-10 ${
                  fullyVisible[idx] ? "opacity-0" : "opacity-60 bg-black"
                }`}
              />

              <div className="py-8 px-5 flex-1 flex flex-col">
                <h4 className="text-white font-bold text-[clamp(0.875rem,_0.792rem_+_0.174vw,_1rem)]">
                  {p.title}
                </h4>
                <p className="text-[clamp(0.688rem,_0.646rem_+_0.087vw,_0.75rem)] mt-2 max-md:mt-0.5">
                  {p.address}
                </p>
                <p className="text-[clamp(0.688rem,_0.646rem_+_0.087vw,_0.75rem)] mt-2 max-md:mt-0.5">
                  {p.description}
                </p>

                <div className="mt-5">
                  <Link href={p.href}>
                    <Button
                      ariaLabel={`Contact about ${p.title}`}
                      label="Contact us"
                      variant="filled"
                      size="sm"
                      radius="full"
                      rightIcon={"icon-arrow-right"}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Ensure consistent rounding for inner images */
        .rounded-md img {
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default Recents;
