"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Content } from "@/components/content";
import useMediaQuery from "@/library/hooks/useMediaQuery";

type AnyEl = any;

export const ArticleDetail: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const article = Content.articleDetail as any;
  if (!article) return null;

  const renderContentElement = useCallback(
    (el: AnyEl, key: React.Key) => {
      if (!el) return null;

      switch (el.type) {
        case "text":
          return (
            <p key={key} className="mb-6 text-base font-normal text-white">
              {el.text}
            </p>
          );

        case "image":
          return (
            <div key={key} className="w-full rounded-[20px] overflow-hidden ">
              <Image
                src={el.image}
                alt={`article-image-${key}`}
                width={900}
                height={520}
                className="object-cover w-full h-auto"
              />
            </div>
          );

        case "list":
          return (
            <ul
              key={key}
              className="mb-6 list-disc list-inside text-sm text-white space-y-2"
            >
              {(el.items || []).map((it: string, i: number) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          );

        case "highlight":
          return (
            <div key={key} className="mb-4 text-sm font-semibold text-white">
              {el.text}
            </div>
          );

        case "container":
          return (
            <div
              key={key}
              className="mb-6 flex md:items-center gap-6 w-full max-md:flex-col"
            >
              {(el.columns || []).map((col: AnyEl, ci: number) => (
                <div
                  key={ci}
                  style={{ width: isMobile ? "100%" : col.width || "auto" }}
                >
                  {(col.children || []).map((child: AnyEl, chi: number) =>
                    renderContentElement(child, `${key}-${ci}-${chi}`)
                  )}
                </div>
              ))}
            </div>
          );

        default:
          return null;
      }
    },
    [isMobile]
  );

  return (
    <article className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column - small image and meta */}
          <div className="lg:col-span-3">
            <div className="rounded-[20px] overflow-hidden bg-[var(--color-base-1)] p-4">
              <div className="w-full h-[clamp(21.188rem,_9.521rem_+_24.306vw,_38.688rem)] rounded-[20px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={339}
                  height={619}
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-[clamp(1.5rem,_1rem_+_1.042vw,_2.25rem)] font-bold leading-tight">
                {article.title}
              </h1>
              <div className="hidden md:block h-[2px] flex-1 mx-6 bg-primary-1" />
            </div>
            <h2 className="text-[clamp(1.5rem,_1rem_+_1.042vw,_2.25rem)] font-normal mt-2 text-white">
              {article.subtitle}
            </h2>

            <div className="mt-6 prose prose-invert max-w-none text-sm md:text-base">
              {(article.content || []).map((c: AnyEl, i: number) =>
                renderContentElement(c, i)
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;
