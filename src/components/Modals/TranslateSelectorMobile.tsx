import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Content } from "@/components/content";
import { languages } from "../layout/Header";
import { useState } from "react";

export const TranslateSelectorMobile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="relative z-50 py-8 px-6 w-full h-full flex flex-col gap-16">
      <ul className="">
        {languages.map((lang) => (
          <li
            key={lang.code}
            className="text-white font-normal text-base w-full cursor-pointer group relative my-2.5"
            onClick={() => setSelectedLanguage(lang.code)}
          >
            {lang.label}
            <div className="absolute left-0 w-0 group-hover:w-full -bottom-1 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between self-end w-full">
        <div className="text-xs font-normal w-[138px]">
          Developed by the team of{" "}
          <span className="font-semibold">Esthetiqo</span>
        </div>
        <div className="flex items-center gap-4">
          {Content.footer.socials.map((link) => (
            <button
              key={link.platform}
              aria-label={link.platform}
              className="text-white/90 text-2xl hover:text-white"
            >
              <span className={`${link.icon}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
