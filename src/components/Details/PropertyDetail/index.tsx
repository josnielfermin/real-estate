"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const PropertyDetail: React.FC = () => {
  // Content.properties is an array of property objects
  const properties = (Content.properties as any[]) || [];
  const item = properties && properties.length ? properties[0] : null;

  // Build a gallery fallback if the content doesn't include images
  const defaultGallery = [
    "/static/images/premium-properties/calvalli-tower.png",
    "/static/images/premium-properties/image-2.png",
    "/static/images/premium-properties/image-3.png",
    "/static/images/premium-properties/image-4.png",
  ];

  const gallery: string[] =
    (item && (item.gallery || (item.image ? [item.image] : null))) ||
    defaultGallery;
  const [active, setActive] = useState<number>(0);

  if (!item) return null;

  // Derive a short description from structured content if available
  const rawDescription = (() => {
    if (item.description) return item.description;
    if (item.items && Array.isArray(item.items)) {
      // find first text block
      const textBlock = item.items.find((it: any) => it.type === "text");
      if (textBlock) return textBlock.text;
    }
    return "Premium residence located in Dubai offering luxury amenities and modern design.";
  })();

  // Derive building highlights list from structured content (list type)
  const buildingHighlights: string[] = (() => {
    if (item.items && Array.isArray(item.items)) {
      const listBlock = item.items.find((it: any) => it.type === "list");
      if (listBlock && Array.isArray(listBlock.items)) return listBlock.items;
    }
    return [];
  })();

  // Address fallback
  const address = item.address || item.location || "Tower, Dubai, UAE";

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: images */}
          <div className="lg:col-span-6">
            <article className="rounded-2xl overflow-hidden bg-[var(--color-base-1)] p-4">
              <div className="w-full rounded-xl overflow-hidden relative">
                <div className="w-full h-[520px] relative">
                  <Image
                    src={gallery[active]}
                    alt={`${item.title} image ${active + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnails */}
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
          </div>

          {/* Right: details */}
          <div className="lg:col-span-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                {item.title}
              </h2>
              <div className="hidden md:block h-[2px] flex-1 mx-6 bg-primary-1" />
            </div>

            <p className="mt-4 text-sm md:text-base text-white/90 max-w-prose">
              {rawDescription}
            </p>

            {/* Building highlights list */}
            {buildingHighlights && buildingHighlights.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-white">
                  Building highlights
                </h4>
                <ul className="mt-3 list-disc list-inside text-sm text-white/80 space-y-2">
                  {buildingHighlights.map((h: string, idx: number) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features & amenities row */}
            {item.features && item.features.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-white">
                  Features & amenities
                </h4>
                <div className="mt-3 flex flex-wrap items-center gap-6">
                  {item.features.map((f: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className={`${f.icon} text-[20px]`} aria-hidden />
                      <span className="text-sm text-white/90">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-6">
              <Link href="/contact-us">
                <Button
                  ariaLabel="Contact Us about property"
                  label="Contact Us"
                  variant="filled"
                  size="lg"
                  radius="full"
                  className="bg-[var(--color-primary-1)] text-black"
                  rightIcon={"icon-arrow-right"}
                />
              </Link>

              <div className="text-sm text-white/80">{address}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rounded-2xl img {
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
};

export default PropertyDetail;
