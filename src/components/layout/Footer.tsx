import { Logo } from "../Logo";
import { NavBar } from "@/components/layout/NavBar";
import { Content } from "@/components/content";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-6">
      <div className="max-w-7xl mx-auto px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] flex items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <Logo />
          <div className="text-sm text-white/80">
            <div>2024</div>
            <div>All copyrights reserved</div>
          </div>
        </div>

        <nav className="hidden md:flex">
          <NavBar />
        </nav>

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
    </footer>
  );
};
