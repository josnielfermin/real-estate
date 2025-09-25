"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const Blog = () => {
  const posts = Content.blog.posts || [];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 360; // width per slide including gap
  const autoplayRef = useRef<number | null>(null);

  const scrollNext = (steps = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: itemWidth * steps, behavior: "smooth" });
  };
  const scrollPrev = (steps = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -itemWidth * steps, behavior: "smooth" });
  };

  useEffect(() => {
    const start = () => {
      stopAutoplay();
      autoplayRef.current = window.setInterval(() => {
        const el = trackRef.current;
        if (!el) return;
        // if near end, scroll back to start smoothly
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollNext(1);
        }
      }, 4000);
    };
    const stop = () => stopAutoplay();

    const el = trackRef.current;
    if (el) {
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", start);
    }

    start();
    return () => {
      stopAutoplay();
      if (el) {
        el.removeEventListener("mouseenter", stop);
        el.removeEventListener("mouseleave", start);
      }
    };
  }, []);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] bg-transparent-1 w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-4 md:mb-10 leading-[1.1] max-md:flex gap-1">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {Content.blog.title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {Content.blog.subtitle}
          </h2>
        </div>

        <div className="relative max-w-[1545px] mx-auto">
          <div
            ref={trackRef}
            className="w-full flex-nowrap overflow-x-scroll py-2 hide-scrollbar hide-scrollbar flex gap-[clamp(0.5rem,_-0.5rem_+_2.083vw,_2rem)]"
            role="list"
            aria-label="Blog posts carousel"
          >
            {posts.map((p, idx) => (
              <article
                key={idx}
                className="flex items-center max-md:flex-col gap-[clamp(1rem,_0.333rem_+_1.389vw,_2rem)]"
                role="listitem"
              >
                <div className="relative min-w-[254px] h-full rounded-[20px] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={254}
                    height={281}
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                <div className="flex flex-col md:justify-between h-full max-md:gap-4">
                  <div>
                    <h4 className="text-white font-normal text-[clamp(1.25rem,_0.75rem_+_1.042vw,_2rem)] leading-[1.1]">
                      {p.title}
                    </h4>
                    <h4 className="text-white font-bold text-[clamp(1.25rem,_0.75rem_+_1.042vw,_2rem)] leading-[1.1]">
                      {p.subtitle}
                    </h4>
                  </div>
                  <p className="text-[#767676] text-sm mt-2 md:min-w-[400px] line-clamp-6">
                    {p.excerpt}
                  </p>
                  <div className="mt-4">
                    <Link href="#">
                      <Button
                        ariaLabel={`Read more ${p.title}`}
                        label="Read More"
                        variant="filled"
                        size="md"
                        radius="full"
                        rightIcon="icon-arrow-right"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-20 text-2xl max-md:hidden">
            <button
              aria-label="Previous"
              onClick={() => scrollPrev(1)}
              className="text-primary-1"
            >
              <div className="icon-arrow" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollNext(1)}
              className="text-primary-1"
            >
              <div className="icon-arrow rotate-180 -mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
