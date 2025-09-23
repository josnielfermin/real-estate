"use client";

import { Questions } from "@/components/Questions";
import Newsletter from "@/components/Newsletter";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import { ArticleDetail } from "@/components/Blog/ArticleDetail";

export default function Blog() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-full flex flex-col max-md:items-center justify-between">
      <ArticleDetail />
      <Questions />
      <Newsletter />
      {/* <main className="w-full">
      </main> */}
    </div>
  );
}
