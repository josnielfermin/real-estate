import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const PremiumProperties = () => {
  const { title, subtitle, items } = Content.premiumProperties;

  // Ensure we have a predictable number of items
  const displayed = items.slice(0, 7);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8">
          <h3 className="text-white text-base md:text-lg font-medium">
            {title}
          </h3>
          <h2 className="text-white text-2xl md:text-4xl font-extrabold mt-2">
            {subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hero large card (first item) */}
          {displayed[0] && (
            <article className="relative rounded-lg overflow-hidden md:row-span-2">
              <Image
                src={displayed[0].image}
                alt={displayed[0].title}
                width={900}
                height={700}
                className="object-cover w-full h-64 md:h-full"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute left-6 bottom-6 z-10 text-white max-w-xs">
                <h3 className="text-lg md:text-2xl font-bold">
                  {displayed[0].title}
                </h3>
                <p className="text-sm mt-2 opacity-90">
                  {displayed[0].addressDescription}
                </p>
                <div className="mt-4">
                  <Link href="/contact-us">
                    <Button
                      ariaLabel={`Contact about ${displayed[0].title}`}
                      label="Contact us"
                      variant="filled"
                      size="sm"
                      radius="full"
                      className="bg-[var(--color-primary-1)] text-black"
                    />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Remaining items */}
          {displayed.slice(1).map((prop, idx) => (
            <article
              key={idx}
              className={`relative rounded-lg overflow-hidden ${
                idx === 1 ? "md:row-span-2" : ""
              }`}
            >
              <Image
                src={prop.image}
                alt={prop.title}
                width={600}
                height={420}
                className="object-cover w-full h-48 md:h-full"
                priority={idx < 3}
              />

              {/* Small overlay with title */}
              <div className="absolute left-4 bottom-4 z-10 text-white max-w-xs">
                <h4 className="text-sm md:text-base font-semibold">
                  {prop.title}
                </h4>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/properties">
            <Button
              ariaLabel="View all properties"
              label="View All Properties"
              variant="filled"
              size="md"
              radius="full"
              className="bg-[var(--color-primary-1)] text-black"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* Make the grid visually similar: force the second item to span two rows on larger screens */
        @media (min-width: 768px) {
          .md\\:row-span-2 {
            grid-row: span 2 / span 2;
          }
          .grid > article:nth-child(2) {
            /* second direct child after hero fills center column top */
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumProperties;
