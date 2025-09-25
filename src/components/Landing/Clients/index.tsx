import Image from "next/image";
import { Content } from "@/components/content";

export const Clients = () => {
  const { items, title, subtitle } = Content.clients as any;

  return (
    <section className="py-12 w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div className="relative flex items-center justify-center gap-6 md:gap-10 max-w-[1545px] mx-auto">
          {items.map((c: any, idx: number) => {
            const isCenter = idx === 1; // center card (bigger)
            const decorator = isCenter
              ? "/static/images/clients/card-decorator.svg"
              : "/static/images/clients/card-decorator-2.svg";
            const starCount = isCenter ? 5 : 4;

            return (
              <article
                key={c.name}
                className={`relative rounded-2xl p-6 text-center flex flex-col items-center ${
                  isCenter ? "w-[538px] h-[521px]" : "w-[478px] h-[463px]"
                }`}
              >
                {/* Decorator behind avatar */}
                <div className="absolute -translate-x-1/2 left-1/2 bottom-0 w-full h-full">
                  <Image
                    src={decorator}
                    alt="card decorator"
                    width={isCenter ? 538 : 478}
                    height={isCenter ? 521 : 463}
                    className="object-cover"
                    priority={isCenter}
                  />
                </div>

                {/* Avatar */}
                <div
                  className={`relative -top-6 ${
                    isCenter ? "w-[215px] h-[215px]" : "w-[192px] h-[192px]"
                  } rounded-lg overflow-hidden`}
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={215}
                    height={215}
                    className="object-cover"
                    priority={idx < 2}
                  />
                </div>

                <h4 className="mt-6 text-white text-[clamp(1.5rem,_1.167rem_+_0.694vw,_2rem)] font-medium">
                  {c.name}
                </h4>

                <p className="mt-6 text-[clamp(0.625rem,_0.542rem_+_0.174vw,_0.75rem)] max-w-xs text-center text-white line-clamp-3 px-2">
                  {c.feedback}
                </p>

                <div className="mt-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`icon-star relative z-10 text-sm ${
                        Number(i) < starCount
                          ? "text-primary-3"
                          : "text-[#000D24]"
                      }`}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
