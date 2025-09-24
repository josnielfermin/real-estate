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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {Content.blog.title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {Content.blog.subtitle}
          </h2>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="blog-track overflow-x-auto no-scrollbar flex gap-6 py-2 px-1"
            role="list"
            aria-label="Blog posts carousel"
          >
            {posts.map((p, idx) => (
              <article
                key={idx}
                className="flex-shrink-0 w-[320px] bg-[var(--color-base-1)] rounded-xl p-4"
                role="listitem"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 320px, 80vw"
                    priority={idx === 0}
                  />
                </div>

                <h4 className="text-white font-semibold mt-4 text-lg">
                  {p.title}
                </h4>
                <p className="text-white/80 text-sm mt-2 line-clamp-3">
                  {p.excerpt}
                </p>

                <div className="mt-4">
                  <Link href="#">
                    <Button
                      ariaLabel={`Read more ${p.title}`}
                      label="Read More"
                      variant="filled"
                      size="sm"
                      radius="full"
                      className="bg-[var(--color-primary-1)] text-black"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              aria-label="Previous"
              onClick={() => scrollPrev(1)}
              className="p-2 rounded-full border border-transparent bg-[rgba(255,255,255,0.03)] text-white"
            >
              <span className="icon-arrow-left" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollNext(1)}
              className="p-2 rounded-full border border-transparent bg-[rgba(255,255,255,0.03)] text-white"
            >
              <span className="icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .blog-track {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Blog;
