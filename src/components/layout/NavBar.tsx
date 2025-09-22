import { Content } from "@/components/content";
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-white gap-24 mr-40">
      {Content.header.map((link) => (
        <a key={link.title} href={link.url} className="hover:underline">
          {link.title}
        </a>
      ))}
    </nav>
  );
};
