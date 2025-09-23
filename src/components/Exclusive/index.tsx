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
    <section className="relative rounded-[28px] overflow-hidden bg-black">
      {/* Dark rectangular background visible hasta que el video este listo */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: loaded ? 0 : 1 }}
        aria-hidden
      />

      {/* Video de fondo (se vuelve visible cuando carga) */}
      <video
        ref={videoRef}
        src={video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        loop
        muted
        autoPlay
        preload="auto"
        aria-hidden
      />

      {/* Overlay para asegurar legibilidad del texto */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none"
        style={{ opacity: loaded ? 1 : 1 }}
        aria-hidden
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ background: "var(--color-primary-1)", color: "#09121b" }}
          >
            Properties
          </span>

          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-white text-sm md:text-base opacity-90">
            {description}
          </p>

          <div className="mt-8">
            <Link href="/contact-us">
              <Button
                ariaLabel="Contact us"
                label="Contact us"
                variant="filled"
                size="md"
                radius="full"
                className=""
                style={{
                  background: "var(--color-primary-1)",
                  color: "white",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
