"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Content } from "@/components/content";

export const Clients = () => {
  const { items, title, subtitle } = Content.clients as any;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const displayed = items || [];

  const [fullyVisible, setFullyVisible] = useState<boolean[]>(
    new Array(displayed.length).fill(false)
  );

  // reset when items length changes
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, displayed.length);
    setFullyVisible(new Array(displayed.length).fill(false));
  }, [displayed.length]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        setFullyVisible((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx === -1) return;
            next[idx] = entry.intersectionRatio >= 0.999;
          });
          return next;
        });
      },
      {
        root,
        threshold: [1],
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [displayed.length]);

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative flex items-center lg:justify-center gap-[clamp(1.5rem,_0.833rem_+_1.389vw,_2.5rem)] max-w-[1545px] mx-auto w-full flex-nowrap overflow-x-scroll py-2 hide-scrollbar"
        >
          {displayed.map((c: any, idx: number) => {
            const isCenter = idx === 1; // center card (bigger)
            const decorator = isCenter
              ? "/static/images/clients/card-decorator.svg"
              : "/static/images/clients/card-decorator-2.svg";
            const starCount = isCenter ? 5 : 4;

            return (
              <article
                ref={(el: HTMLElement | null) => {
                  itemRefs.current[idx] = el;
                }}
                key={c.name}
                className={`relative rounded-[20px] p-6 text-center flex flex-col items-center max-lg:justify-between max-lg:bg-transparent-1 max-lg:w-full max-lg:min-w-[243px] max-lg:h-[336px] ${
                  isCenter ? "w-[538px] h-[521px]" : "w-[478px] h-[463px]"
                }`}
              >
                {/* dark mask that appears when the card is NOT fully inside the scroller */}
                <div
                  aria-hidden
                  className={`absolute rounded-[20px] inset-0 pointer-events-none transition-opacity duration-300 z-10 ${
                    fullyVisible[idx] ? "opacity-0" : "opacity-60 bg-black"
                  }`}
                />

                {/* Decorator behind avatar */}
                <div className="absolute -translate-x-1/2 left-1/2 bottom-0 w-full h-full max-lg:hidden">
                  <Image
                    src={decorator}
                    alt="card decorator"
                    width={isCenter ? 538 : 478}
                    height={isCenter ? 521 : 463}
                    className="object-cover"
                    priority={isCenter}
                  />
                </div>

                {/* Avatar */}
                <div
                  className={`relative lg:-top-6 ${
                    isCenter
                      ? "w-[clamp(7.188rem,_3.021rem_+_8.681vw,_13.438rem)] h-[clamp(7.188rem,_3.021rem_+_8.681vw,_13.438rem)]"
                      : "w-[clamp(5.75rem,_1.583rem_+_8.681vw,_12rem)] h-[clamp(5.75rem,_1.583rem_+_8.681vw,_12rem)]"
                  } rounded-lg overflow-hidden max-lg:rounded-[40px] max-lg:w-[118px] max-lg:h-[118px]`}
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={215}
                    height={215}
                    className="object-cover w-full h-full"
                    priority={idx < 2}
                  />
                </div>

                <h4 className="mt-[clamp(0rem,_-1rem_+_2.083vw,_1.5rem)] text-white text-[clamp(1.5rem,_1.167rem_+_0.694vw,_2rem)] font-medium">
                  {c.name}
                </h4>

                <p className="mt-[clamp(0rem,_-1rem_+_2.083vw,_1.5rem)] text-[clamp(0.625rem,_0.542rem_+_0.174vw,_0.75rem)] max-w-xs text-center text-white line-clamp-3 px-2">
                  {c.feedback}
                </p>

                <div className="mt-[clamp(0rem,_-1rem_+_2.083vw,_1.5rem)] flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`icon-star relative z-10 text-sm ${
                        Number(i) < starCount
                          ? "text-primary-3"
                          : "text-[#000D24]"
                      }`}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
