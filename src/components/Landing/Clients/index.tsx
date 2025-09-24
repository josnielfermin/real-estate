import Image from "next/image";
import { Content } from "@/components/content";

export const Clients = () => {
  const { items, title, subtitle } = Content.clients as any;

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

        <div className="relative flex items-center justify-center gap-6 md:gap-10">
          {items.map((c: any, idx: number) => {
            const isCenter = idx === 1; // center card (bigger)
            const decorator = isCenter
              ? "/static/images/clients/card-decorator.svg"
              : "/static/images/clients/card-decorator-2.svg";
            const starCount = isCenter ? 5 : 4;

            return (
              <article
                key={c.name}
                className={`relative bg-[var(--color-base-1)] rounded-2xl p-6 text-center flex flex-col items-center max-w-xs md:max-w-sm ${
                  isCenter ? "scale-105 shadow-2xl" : "scale-95"
                }`}
                style={{ minWidth: isCenter ? 320 : 260 }}
              >
                {/* Decorator behind avatar */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <Image
                    src={decorator}
                    alt="card decorator"
                    width={isCenter ? 160 : 120}
                    height={isCenter ? 160 : 120}
                    className="object-contain"
                    priority={isCenter}
                  />
                </div>

                {/* Avatar */}
                <div className="relative mt-6 w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={96}
                    height={96}
                    className="object-cover"
                    priority={idx < 2}
                  />
                </div>

                <h4 className="mt-6 text-white text-lg font-medium">
                  {c.name}
                </h4>

                <p className="mt-3 text-sm text-white opacity-80 line-clamp-3 px-2">
                  {c.feedback}
                </p>

                <div className="mt-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="icon-star"
                      style={{
                        color:
                          i < starCount
                            ? "var(--color-primary-3)"
                            : "rgba(255,255,255,0.18)",
                        fontSize: 14,
                      }}
                      aria-hidden
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <style jsx>{`
          section {
          }
          .icon-star {
            display: inline-block;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;
