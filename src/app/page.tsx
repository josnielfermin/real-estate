"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import { Cover } from "@/components/Cover";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-full flex flex-col max-md:items-center justify-between">
      <Cover />
    </div>
  );
}
