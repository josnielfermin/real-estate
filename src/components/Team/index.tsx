import Image from "next/image";
import { Content } from "@/components/content";

export const Team = () => {
  const { members, title, subtitle } = Content.team as any;

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] relative">
      <div className="max-w-[1704px] w-full mx-auto md:pb-40">
        <div className="flex items-center gap-8">
          <div className="w-full">
            <div className="max-md:flex gap-1">
              <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal leading-[1.1]">
                {title}
              </h3>
              <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold leading-[1.1]">
                {subtitle}
              </h2>
            </div>

            <div className="mt-8 flex items-center max-md:justify-center gap-6 max-w-[1545px] mx-auto w-full">
              {members.map((m: any, idx: number) => (
                <article
                  key={m.name}
                  className="relative rounded-2xl overflow-hidden bg-base-1 p-6 flex flex-col w-[clamp(20rem,_15.5rem_+_9.375vw,_26.75rem)] h-[clamp(17.5rem,_8.958rem_+_17.795vw,_30.313rem)]"
                >
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                      priority={idx === 0}
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 left-0 text-white z-10 bg-[rgba(0,_0,_0,_0.30)] backdrop-blur-[10px] w-full px-[clamp(0.5rem,_0rem_+_1.042vw,_1.25rem)] py-[clamp(0.625rem,_0rem_+_1.302vw,_1.563rem)]">
                    <h4 className="text-[clamp(0.5rem,_0rem_+_1.042vw,_1.25rem)] font-bold">
                      {m.name}
                    </h4>
                    <div className="text-[clamp(0.375rem,_0.042rem_+_0.694vw,_0.875rem)] font-normal text-white mt-2">
                      <div>Experience: {m.experience}</div>
                      <div>Specialization: {m.specialization}</div>
                      <div>Languages: {m.languages.join(", ")}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative right column */}
      <div className="absolute right-0 bottom-0 w-full h-full max-w-[2066px] max-h-[1175px] overflow-hidden -z-10 pointer-events-none max-md:hidden">
        <Image
          src="/static/images/team/build-decorator.png"
          alt="decorative building"
          width={2066}
          height={1175}
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-[linear-gradient(0deg,_#000D24_17.94%,_rgba(0,_13,_36,_0.00)_100%)]" />
      </div>
    </section>
  );
};

export default Team;
