import { Logo } from "../Logo";
import { NavBar } from "@/components/layout/NavBar";
import { Content } from "@/components/content";
import Image from "next/image";

export const Footer = () => {
  return (
    // h-[189px] max-md:h-[303px]
    <footer className="w-full bg-[rgba(0,_13,_36,_0.20)] backdrop-blur-[10px] h-[clamp(11.813rem,_23.688rem_+_-9.896vw,_18.938rem)] flex flex-col py-6 px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] justify-between gap-2 relative max-md:pb-5 z-[1]">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <div className="flex items-center gap-4">
          {Content.footer.socials.map((link) => (
            <button
              key={link.platform}
              aria-label={link.platform}
              className="text-white/90 hover:text-white text-2xl"
            >
              <span className={`${link.icon}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <NavBar isFooter />
      </div>
      <div className="flex items-center justify-between gap-2 max-md:flex-col max-md:items-center">
        <div className="text-sm text-white max-md:text-center max-md:flex max-md:gap-1">
          <div>2024</div>
          <div>All copyrights reserved</div>
        </div>
        <div className="text-sm text-white text-end max-md:text-center max-md:flex max-md:gap-1">
          <div>Developed by the team of</div>
          <div className="font-semibold">Esthetiqo</div>
        </div>
      </div>
    </footer>
  );
};
