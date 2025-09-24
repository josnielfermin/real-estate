import { Content } from "@/components/content";

export const Highlights = () => {
  const { title, subtitle, items } = Content.highlights;

  return (
    <section className="py-12 px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] w-full">
      <div className="mx-auto max-w-[1704px] flex flex-col md:flex-row md:items-center gap-8">
        {/* Left: headings */}
        <div className="flex-1 text-left leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white font-bold text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)]">
            {subtitle}
          </h2>
        </div>

        {/* Right: grid of highlight cards */}
        <div className="w-full md:w-[58%]">
          <div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-4">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-[20px] bg-transparent-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[clamp(3rem,_1.542rem_+_3.038vw,_5.188rem)] h-[clamp(3.5rem,_1.875rem_+_3.385vw,_5.938rem)] rounded-[20px] flex items-center justify-center bg-transparent-1">
                    <span
                      className={`${it.icon} text-primary-1 text-[clamp(1.5rem,_1rem_+_1.042vw,_2.25rem)]`}
                    />
                  </div>
                  <div className="leading-[1.1]">
                    <div className="text-[clamp(1.5rem,_1.167rem_+_0.694vw,_2rem)] font-bold">
                      {it.amount}
                    </div>
                    <div className="text-[clamp(0.875rem,_1.042rem_+_-0.347vw,_0.625rem)] font-normal">
                      {it.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
