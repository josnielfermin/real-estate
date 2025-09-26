"use client";

import { useRef, useState, useEffect } from "react";
import { Content } from "@/components/content";

export const Questions = () => {
  const { items, title, subtitle } = Content.questions as any;
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const onResize = () => {
      // force reflow so heights recalc
      contentRefs.current.forEach((el) => {
        if (!el) return;
        if (el.dataset.open === "true") {
          el.style.maxHeight = el.scrollHeight + "px";
        } else {
          el.style.maxHeight = "0px";
        }
      });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
    // after state update, adjust maxHeight for animation
    setTimeout(() => {
      contentRefs.current.forEach((el, i) => {
        if (!el) return;
        const open = i === (openIndex === idx ? null : idx);
        el.dataset.open = open ? "true" : "false";
        el.style.maxHeight = open ? el.scrollHeight + "px" : "0px";
      });
    }, 0);
  };

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] bg-transparent-1 w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] backdrop-blur-3xl">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div className="space-y-4 w-full max-w-[1160px] mx-auto">
          {items.map((q: any, idx: number) => (
            <div key={idx} className="overflow-hidden">
              <button
                className="w-full text-left md:px-6 md:py-4 flex items-center justify-between gap-4"
                aria-expanded={openIndex === idx}
                aria-controls={`q-panel-${idx}`}
                onClick={() => toggle(idx)}
              >
                <span className="text-white text-[clamp(0.75rem,_0.583rem_+_0.347vw,_1rem)]">
                  {q.question}
                </span>
                <span
                  className={`icon-arrow-right-up  ${
                    openIndex === idx
                      ? "rotate-90 text-primary-1"
                      : "rotate-0 text-[#767676]"
                  } transition-all !duration-300`}
                  aria-hidden
                />
              </button>

              <div
                id={`q-panel-${idx}`}
                ref={(el) => (contentRefs.current[idx] = el)}
                className="md:px-6 overflow-hidden transition-max-height duration-300"
                role="region"
                aria-labelledby={`q-header-${idx}`}
                style={{ maxHeight: openIndex === idx ? undefined : "0px" }}
              >
                <div className="py-4 text-[clamp(0.625rem,_0.375rem_+_0.521vw,_1rem)] text-[#8D8D8D]">
                  {q.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-max-height {
          transition: max-height 320ms ease;
        }
      `}</style>
    </section>
  );
};

export default Questions;
