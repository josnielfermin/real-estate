"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const Exclusive = () => {
  const { title, description, video } = Content.exclusive;
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Si el video ya puede reproducirse, marcar como cargado
    const v = videoRef.current;
    if (!v) return;
    const handleCanPlay = () => setLoaded(true);
    v.addEventListener("canplay", handleCanPlay);
    return () => v.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <div className="relative w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <section className="relative max-w-[1704px] md:h-[738px] w-full overflow-hidden rounded-[20px] flex md:items-center md:justify-start max-md:flex-col-reverse gap-4">
        <div
          className="absolute inset-0 bg-black transition-opacity duration-700 max-md:hidden"
          style={{ opacity: loaded ? 0 : 1 }}
          aria-hidden
        />
        <video
          ref={videoRef}
          src={video}
          className={`md:absolute md:inset-0 w-full h-full rounded-[20px] object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-100"
          }`}
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent max-md:hidden pointer-events-none"
          style={{ opacity: loaded ? 1 : 1 }}
          aria-hidden
        />
        {/* Contenido principal */}
        <div className="relative z-10 md:px-[clamp(1.25rem,_-2.25rem_+_7.292vw,_6.5rem)]">
          <div className="">
            <Button
              ariaLabel="Properties"
              label="Properties"
              variant="filled"
              size="sm"
              radius="full"
              className=""
            />
            <h2 className="text-white text-[clamp(1.5rem,_0.5rem_+_2.083vw,_3rem)] font-bold leading-tight max-w-[500px] mt-2">
              {title}
            </h2>
            <p className="mt-4 text-white text-[clamp(0.75rem,_0.583rem_+_0.347vw,_1rem)] max-w-[590px]">
              {description}
            </p>
            <div className="mt-6 max-md:hidden">
              <Link href="/contact-us">
                <Button
                  ariaLabel="Contact us"
                  label="Contact us"
                  variant="filled"
                  size="md"
                  radius="full"
                  rightIcon={"icon-arrow-right"}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exclusive;
