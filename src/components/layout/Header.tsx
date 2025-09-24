"use client";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import { Logo } from "../Logo";
import { Button } from "@/components/ui/Button";
import { NavBar } from "@/components/layout/NavBar";
import { useState } from "react";

export const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
];

export const LanguageSelector = ({
  onLanguageSelect,
}: {
  onLanguageSelect: (lang: string) => void;
}) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-primary-1 rounded-[20px] shadow-lg px-5 py-2.5">
      <ul className="">
        {languages.map((lang) => (
          <li
            key={lang.code}
            className="text-black font-normal text-base w-full cursor-pointer"
            onClick={() => onLanguageSelect(lang.code)}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Header = ({
  setMobileMenuOpen,
  isMobileMenuOpen,
  setTranslateSelectorOpen,
  isTranslateSelectorOpen,
}: {
  setMobileMenuOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setTranslateSelectorOpen: (open: boolean) => void;
  isTranslateSelectorOpen: boolean;
}) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const languageIcon = isMobile ? (
    <div className="icon-translate" />
  ) : (
    <div className="icon-chevron" />
  );

  return (
    <header className="w-full flex items-center justify-between gap-4 px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] py-4 h-[108px] max-md:h-[82px]">
      <Logo />
      <div className="flex items-center gap-2.5">
        <NavBar />
        <div className="relative">
          <Button
            label={isMobile ? null : "Language"}
            ariaLabel="Select Language"
            radius="full"
            rightIcon={languageIcon}
            onClick={() => {
              if (isMobile) {
                setTranslateSelectorOpen(!isTranslateSelectorOpen);
              } else {
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }
            }}
          />
          {isLanguageMenuOpen && (
            <LanguageSelector onLanguageSelect={setSelectedLanguage} />
          )}
        </div>
        {isMobile ? (
          <Button
            label={null}
            ariaLabel="Menu"
            radius="full"
            rightIcon={"icon-menu-2"}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        ) : (
          <Button
            label="Contact Us"
            ariaLabel="Contact Us"
            radius="full"
            rightIcon={"icon-arrow-right"}
          />
        )}
      </div>
    </header>
  );
};
