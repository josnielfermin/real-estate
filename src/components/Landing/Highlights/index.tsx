import { Content } from "@/components/content";

export const Highlights = () => {
  const { title, subtitle, items } = Content.highlights;

  return (
    <section className="py-12">
      <div className="mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">
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
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  background: "var(--color-base-1, #000d24)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-md flex items-center justify-center"
                    style={{ background: "var(--color-transparent-1)" }}
                  >
                    <span className={`${it.icon} text-white`} />
                  </div>
                  <div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "var(--color-primary-1)" }}
                    >
                      {it.amount}
                    </div>
                    <div className="text-sm" style={{ color: "white" }}>
                      {it.title}
                    </div>
                  </div>
                </div>

                {/* decorative small rounded box to the right */}
                <div
                  className="hidden sm:flex items-center justify-center rounded-md h-10 w-10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="icon-arrow-right text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Ensure icons inherit color */
        .icon-arrow-right,
        .icon-stars,
        .icon-build,
        .icon-people {
          font-size: 18px;
          line-height: 1;
        }
      `}</style>
    </section>
  );
};

export default Highlights;
