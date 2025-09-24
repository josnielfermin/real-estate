import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Content } from "@/components/content";

export const MenuMobile = () => {
  return (
    <div className="relative z-50 py-8 px-6 w-full h-full flex flex-col gap-20">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <Button
          label="Contact Us"
          ariaLabel="Contact Us"
          radius="full"
          rightIcon={"icon-arrow-right"}
        />
      </div>
      <div className="flex flex-col gap-5">
        {Content.header.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="group relative whitespace-nowrap"
          >
            {link.title}
            <div className="absolute left-0 w-0 group-hover:w-full -bottom-1 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></div>
          </a>
        ))}
      </div>
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
