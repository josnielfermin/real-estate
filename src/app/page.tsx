"use client";

import { Cover } from "@/components/Cover";
import { Partners } from "@/components/Partners";
import { Highlights } from "@/components/Highlights";
import { Exclusive } from "@/components/Exclusive";
import { PremiumProperties } from "@/components/PremiumProperties";
import { Pros } from "@/components/Pros";
import { Banner } from "@/components/Banner";
import { Clients } from "@/components/Clients";
import { MainArticle } from "@/components/MainArticle";
import { Blog } from "@/components/Blog";
import { Team } from "@/components/Team";
import { Questions } from "@/components/Questions";
import Newsletter from "@/components/Newsletter";
import { Footer } from "@/components/layout/Footer";
import useMediaQuery from "@/library/hooks/useMediaQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-full flex flex-col max-md:items-center justify-between">
      <Cover />
      <Partners />
      <Highlights />
      <Exclusive />
      <PremiumProperties />
      <Pros />
      <Banner />
      <Clients />
      <MainArticle />
      <Blog />
      <Team />
      <Questions />
      <Newsletter />

      {/* <main className="w-full">
      </main> */}
    </div>
  );
}
