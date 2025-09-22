"use client";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import { Logo } from "../Logo";
import { Button } from "@/components/ui/Button";
import { NavBar } from "@/components/layout/NavBar";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const languageIcon = isMobile ? (
    <div className="icon-translate" />
  ) : (
    <div className="icon-chevron" />
  );
  return (
    <header className="w-full flex items-center justify-between gap-4 px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] py-4 h-[108px] max-md:h-[82px]">
      <div className="max-md:mt-6">
        <Logo />
      </div>
      <div className="flex items-center gap-2.5">
        <NavBar />
        <Button
          label="Language"
          ariaLabel="Select Language"
          radius="full"
          rightIcon={languageIcon}
        />
        <Button
          label="Contact Us"
          ariaLabel="Contact Us"
          radius="full"
          rightIcon={"icon-arrow-right"}
        />
      </div>
    </header>
  );
};
