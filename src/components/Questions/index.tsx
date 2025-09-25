"use client";

import { useRef, useState, useEffect } from "react";
import { Content } from "@/components/content";

export const Questions = () => {
  const { items, title, subtitle } = Content.questions as any;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((q: any, idx: number) => (
            <div
              key={idx}
              className="bg-[var(--color-base-1)] rounded-lg overflow-hidden border border-transparent"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                aria-expanded={openIndex === idx}
                aria-controls={`q-panel-${idx}`}
                onClick={() => toggle(idx)}
              >
                <span className="text-white text-sm md:text-base">
                  {q.question}
                </span>
                <span
                  className="icon-arrow-right-up text-white transition-transform duration-300"
                  style={{
                    transform:
                      openIndex === idx ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                  aria-hidden
                />
              </button>

              <div
                id={`q-panel-${idx}`}
                ref={(el) => (contentRefs.current[idx] = el)}
                className="px-6 overflow-hidden transition-max-height duration-300"
                role="region"
                aria-labelledby={`q-header-${idx}`}
                style={{ maxHeight: openIndex === idx ? undefined : "0px" }}
              >
                <div className="py-4 text-sm text-white/80">{q.answer}</div>
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
