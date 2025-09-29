"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const PropertyDetail: React.FC = () => {
  const properties = (Content.properties as any[]) || [];
  // state to select which property is shown
  const [propertyIndex, setPropertyIndex] = useState<number>(0);
  // image index inside property (if you later add gallery per property)
  const [activeImage, setActiveImage] = useState<number>(0);

  const current = properties[propertyIndex] || null;

  if (!current) return null;

  // If property has a gallery, use it; otherwise use its image as single-item gallery
  const gallery: string[] =
    current.gallery && current.gallery.length
      ? current.gallery
      : current.image
      ? [current.image]
      : ["/static/images/premium-properties/calvalli-tower.png"];

  // Render items according to their type
  const renderContentBlock = (block: any, idx: number) => {
    if (block.type === "text") {
      return (
        <p key={idx} className="text-white font-normal text-base mt-4">
          {block.text}
        </p>
      );
    }
    if (block.type === "highlight") {
      return (
        <p key={idx} className="text-white font-bold text-base mt-4">
          {block.text}
        </p>
      );
    }
    if (block.type === "list" && Array.isArray(block.items)) {
      return (
        <ul
          key={idx}
          className="mt-3 list-disc list-inside text-sm text-white space-y-2"
        >
          {block.items.map((li: string, i: number) => (
            <li key={i} className="text-white font-normal text-base">
              {li}
            </li>
          ))}
        </ul>
      );
    }
    // fallback for other types
    return null;
  };

  return (
    <section className="pt-[clamp(1.25rem,_-0.917rem_+_4.514vw,_4.5rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: images / property selector */}
          <div className="lg:col-span-6">
            <article className="md:rounded-[20px]  overflow-hidden bg-base-1 border border-base-1 relative">
              <div className="w-full rounded-xl overflow-hidden relative">
                <div className="w-full h-[520px] relative">
                  <Image
                    src={gallery[activeImage]}
                    alt={`${current.title} image ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnails: each thumbnail represents a property (selects propertyIndex) */}
              <div className="mt-4 flex items-center gap-3 md:absolute md:rounded-tl-[20px] md:-bottom-0.5 md:-right-0.5 md:p-4 md:bg-base-1 md:border md:border-base-1">
                {properties.map((p: any, i: number) => (
                  <button
                    key={p.image + i}
                    onClick={() => {
                      setPropertyIndex(i);
                      setActiveImage(0);
                    }}
                    aria-pressed={propertyIndex === i}
                    className={`rounded-md overflow-hidden border-2 max-xs:!w-full ${
                      propertyIndex === i
                        ? "border-[var(--color-primary-1)]"
                        : "border-transparent"
                    }`}
                    style={{ width: 84, height: 56 }}
                  >
                    <Image
                      src={p.image}
                      alt={`Property ${i + 1}`}
                      width={84}
                      height={56}
                      className="object-cover max-xs:!w-full max-xs:!h-full"
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
              <h2 className="text-[clamp(1.5rem,_0.5rem_+_2.083vw,_3rem)] font-bold">
                {current.title}
              </h2>
              <div className="h-[2px] flex-1 mx-6 bg-primary-1" />
            </div>

            {/* Render all structured items */}
            <div className="mt-4 max-w-prose">
              {(current.items || []).map((block: any, idx: number) =>
                renderContentBlock(block, idx)
              )}
            </div>

            {/* Features & amenities row */}
            {current.features && current.features.length > 0 && (
              <div className="mt-6">
                <h4 className="font-bold text-base text-white">
                  Features & amenities
                </h4>
                <div className="mt-3 flex flex-wrap items-center gap-6">
                  {current.features.map((f: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span
                        className={`${f.icon} text-3xl text-primary-1`}
                        aria-hidden
                      />
                      <span className="text-base text-white">{f.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center gap-6 w-full max-w-xs">
              <Link href="/contact-us" className="w-full">
                <Button
                  ariaLabel="Contact Us about property"
                  label="Contact Us"
                  variant="filled"
                  size="lg"
                  radius="full"
                  fullWidth
                  className="bg-[var(--color-primary-1)] text-black"
                  rightIcon={"icon-arrow-right"}
                />
              </Link>
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
