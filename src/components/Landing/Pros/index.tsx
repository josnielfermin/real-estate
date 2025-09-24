import Image from "next/image";
import { Content } from "@/components/content";

export const Pros = () => {
  const { title, subtitle, items } = Content.pros;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-stretch">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{ background: "var(--color-base-1)" }}
            >
              <div className="relative w-full h-56 md:h-48 lg:h-60">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 20vw, (min-width:640px) 45vw, 90vw"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.0) 30%, var(--color-base-1) 100%)",
                  }}
                />

                <div
                  className="absolute left-4 bottom-4 right-4 p-3 rounded-md"
                  style={{ background: "var(--color-transparent-1)" }}
                >
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    {it.title}
                  </h4>
                  <p className="text-white text-xs md:text-sm mt-1 opacity-90">
                    {it.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Ensure consistent card rounding and subtle border */
        article {
          border-radius: 12px;
        }

        @media (min-width: 1024px) {
          .grid > article:nth-child(1) {
            /* keep all equal width on large screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Pros;
