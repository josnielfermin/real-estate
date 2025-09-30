"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";
import useMediaQuery from "@/library/hooks/useMediaQuery";

const ANIM_MS = 600; // matches the transition duration used in classes

export const Cover = () => {
  // Normalize Content.cover to an array of covers
  const covers = (() => {
    const c = (Content as any).cover;
    if (!c) return [];
    // if Content.cover is already an array
    if (Array.isArray(c) && c.length) return c;
    // if Content.cover has a .cover array
    if (Array.isArray(c.cover) && c.cover.length) return c.cover;
    // if the content shape is the old single-object form
    if (c.title || c.image) return [c];
    return [];
  })();

  if (!covers.length) return null;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const [current, setCurrent] = useState(0);
  // initialVisible: controls the wrapper opacity only on first load
  const [initialVisible, setInitialVisible] = useState(false);
  // contentVisible: controls slide entrance/exit when changing slides
  const [contentVisible, setContentVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // ensure wrapper shows once after mount (only once)
    timeoutRef.current = window.setTimeout(() => {
      setInitialVisible(true);
      setContentVisible(true);
    }, 50);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const goTo = (nextIndex: number) => {
    if (isAnimating || nextIndex === current) return;
    setIsAnimating(true);
    // trigger exit animation for the slide content
    setContentVisible(false);

    // after exit animation, swap content and trigger entrance
    window.setTimeout(() => {
      setCurrent(nextIndex);
      // small next tick to ensure classes update
      window.setTimeout(() => setContentVisible(true), 20);

      // finalize animation state
      window.setTimeout(() => setIsAnimating(false), ANIM_MS + 40);
    }, ANIM_MS);
  };

  const prev = () => {
    const next = (current - 1 + covers.length) % covers.length;
    goTo(next);
  };
  const next = () => {
    const nextIdx = (current + 1) % covers.length;
    goTo(nextIdx);
  };

  const cover = covers[current];
  const title = cover.title;
  const subtitle = cover.subtitle;
  const image = cover.image?.url ?? cover.image;
  const imageWidth = cover.image?.width ?? 852;
  const imageHeight = cover.image?.height ?? 612;
  const imageMobile = cover.imageMobile?.url ?? cover.imageMobile;
  const imageMobileWidth = cover.imageMobile?.width ?? 350;
  const imageMobileHeight = cover.imageMobile?.height ?? 251;

  return (
    <div className="w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] max-md:mt-4">
      <section className="relative overflow-hidden rounded-[28px] max-w-[1704px] w-full mx-auto h-[612px] max-xs:h-[400px] flex items-center px-[clamp(0.875rem,_-1.458rem_+_4.861vw,_4.375rem)] max-md:pt-[35px] max-md:items-start">
        {/* fondo decorativo: two images (desktop + mobile) that animate using `visible` state */}
        <div
          className={`absolute inset-0 cover transition-all !duration-300 ${
            initialVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {image && (
            <Image
              src={image}
              alt={title || "Cover image"}
              width={imageWidth}
              height={imageHeight}
              className={`rounded-[28px] absolute right-0 bottom-0 max-xs:hidden transition-all !duration-600 ${
                contentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[612px] opacity-0"
              }`}
              priority
              draggable={false}
              onLoad={() => {
                // ensure wrapper entrance if not already set
                if (!initialVisible) setInitialVisible(true);
                // ensure content visible on first load
                if (!contentVisible) setContentVisible(true);
              }}
            />
          )}

          {imageMobile && (
            <Image
              src={imageMobile}
              alt={title || "Cover image mobile"}
              width={imageMobileWidth}
              height={imageMobileHeight}
              className={`rounded-[28px] absolute right-0 bottom-0 xs:hidden transition-all !duration-600 ${
                contentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[612px] opacity-0"
              }`}
              priority
              draggable={false}
              onLoad={() => {
                if (!initialVisible) setInitialVisible(true);
                if (!contentVisible) setContentVisible(true);
              }}
            />
          )}

          <div className="absolute inset-0" />
        </div>

        {/* Arrows: convert to buttons and wire handlers */}
        <div className="absolute z-50 -bottom-2.5 xs:bottom-0 right-4 md:bottom-4 xs:right-8 md:right-16 flex items-center justify-between text-primary-1 xs:w-[100px] md:w-[150px] w-[45px] h-[40px] text-xl max-xs:text-[10px]">
          <button
            aria-label="Previous cover"
            onClick={prev}
            disabled={isAnimating}
            className="disabled:opacity-40 cursor-pointer"
          >
            <div className="icon-arrow" />
          </button>

          <button
            aria-label="Next cover"
            onClick={next}
            disabled={isAnimating}
            className="disabled:opacity-40 cursor-pointer"
          >
            <div className="icon-arrow rotate-180" />
          </button>
        </div>

        <div
          className={`flex items-center gap-8 transition-all !duration-600 ${
            contentVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-300px]"
          }`}
        >
          {/* Texto principal */}
          <div className="flex-1 text-white max-w-xl">
            <h2 className="text-[clamp(2rem,_0.833rem_+_2.431vw,_3.75rem)] font-normal leading-[1.1] max-md:leading-[1] max-w-[325px]">
              {title}
            </h2>
            <h3 className="text-[clamp(2.125rem,_0.875rem_+_2.604vw,_4rem)] font-bold leading-[1.1] max-md:leading-[1] mt-2">
              {subtitle}
            </h3>
            <div className="md:mt-8 mt-3">
              <Link href="/contact-us">
                <Button
                  ariaLabel="Contact us"
                  label="Contact Us"
                  rightIcon={<span className="icon-arrow-right" />}
                  variant="filled"
                  size={isMobile ? "sm" : "md"}
                  radius="full"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
