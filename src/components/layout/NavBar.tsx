import { Content } from "@/components/content";
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-white gap-[clamp(1.25rem,_-1.917rem_+_6.597vw,_6rem)] mr-[clamp(1.25rem,_-4.583rem_+_12.153vw,_10rem)] max-md:hidden">
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
    </nav>
  );
};
