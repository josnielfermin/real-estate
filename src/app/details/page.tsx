"use client";

import { Questions } from "@/components/Questions";
import Newsletter from "@/components/Newsletter";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import { PropertyDetail } from "@/components/Details/PropertyDetail";
import { Recents } from "@/components/Details/Recents";

export default function Details() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-full flex flex-col max-md:items-center justify-between">
      <PropertyDetail />
      <Recents />
      <Questions />
      <Newsletter />
      {/* <main className="w-full">
      </main> */}
    </div>
  );
}
