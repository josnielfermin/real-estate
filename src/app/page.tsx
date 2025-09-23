"use client";

import { Cover } from "@/components/Landing/Cover";
import { Partners } from "@/components/Landing/Partners";
import { Highlights } from "@/components/Landing/Highlights";
import { Exclusive } from "@/components/Landing/Exclusive";
import { PremiumProperties } from "@/components/Landing/PremiumProperties";
import { Pros } from "@/components/Landing/Pros";
import { Banner } from "@/components/Landing/Banner";
import { Clients } from "@/components/Landing/Clients";
import { MainArticle } from "@/components/Landing/MainArticle";
import { Blog } from "@/components/Landing/Blog";
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
