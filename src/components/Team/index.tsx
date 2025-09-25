import Image from "next/image";
import { Content } from "@/components/content";

export const Team = () => {
  const { members, title, subtitle } = Content.team as any;

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal leading-[1.1]">
              {title}
            </h3>
            <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold leading-[1.1]">
              {subtitle}
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((m: any, idx: number) => (
                <article
                  key={m.name}
                  className="relative rounded-2xl overflow-hidden bg-[var(--color-base-1)] p-6 flex flex-col"
                >
                  <div className="w-full h-64 md:h-56 rounded-xl overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 45vw, 100vw"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="mt-4 text-white">
                    <h4 className="text-lg font-semibold">{m.name}</h4>
                    <div className="text-xs text-white/80 mt-2">
                      <div>Experience: {m.experience}</div>
                      <div>Specialization: {m.specialization}</div>
                      <div>Languages: {m.languages.join(", ")}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Decorative right column */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="w-full h-[520px] relative rounded-2xl overflow-hidden">
              <Image
                src="/static/images/team/build-decorator.png"
                alt="decorative building"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        article {
          border-radius: 14px;
        }
        @media (min-width: 1024px) {
          .rounded-2xl img {
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
