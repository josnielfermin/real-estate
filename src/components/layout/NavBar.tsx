import { Content } from "@/components/content";

export const NavBar = ({ isFooter = false }: { isFooter?: boolean }) => {
  return (
    <nav
      className={`flex items-center justify-between text-white gap-[clamp(1.25rem,_-1.917rem_+_6.597vw,_6rem)] ${
        isFooter
          ? "max-md:grid max-md:grid-cols-2"
          : "mr-[clamp(1.25rem,_-4.583rem_+_12.153vw,_10rem)] max-md:hidden"
      }`}
    >
      {Content.header.map((link, idx) => {
        const placementClass = isFooter
          ? idx % 2 === 0
            ? "justify-self-start"
            : "justify-self-end"
          : "";
        return (
          <a
            key={link.title}
            href={link.url}
            className={`group relative whitespace-nowrap ${placementClass}`}
          >
            {link.title}
            <div className="absolute left-0 w-0 group-hover:w-full -bottom-1 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></div>
          </a>
        );
      })}
    </nav>
  );
};
