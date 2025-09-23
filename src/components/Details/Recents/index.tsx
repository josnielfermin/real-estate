import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const Recents = () => {
  // Prefer explicit recent collection; fall back to properties array
  const source =
    (Content as any).recent?.items || (Content as any).properties || [];

  // Normalize entries into a predictable shape: { title, image, description, address, href }
  const normalized = (source || [])
    .map((el: any) => {
      if (!el) return null;

      // If this entry already looks like a property object with title + image, use directly
      if (
        el.title &&
        (el.image || el.gallery || el.subtitle || el.description)
      ) {
        const firstText = (() => {
          if (el.description) return el.description;
          if (Array.isArray(el.items)) {
            const t = el.items.find((it: any) => it.type === "text");
            return t ? t.text : undefined;
          }
          return el.subtitle || el.addressDescription || undefined;
        })();

        return {
          title: el.title,
          image:
            el.image ||
            (el.gallery && el.gallery[0]) ||
            "/static/images/premium-properties/calvalli-tower.png",
          description: firstText || "Premium apartment in Dubai",
          address: el.address || el.location || "Dubai, UAE",
          href: el.href || "/details",
        };
      }

      // If entry is nested (e.g., properties array from content), try to extract
      const title = el.title || el.name || "Property";
      const firstText = (() => {
        if (Array.isArray(el.items)) {
          const t = el.items.find((it: any) => it.type === "text");
          if (t) return t.text;
          const list = el.items.find((it: any) => it.type === "list");
          if (list && Array.isArray(list.items))
            return list.items.slice(0, 2).join(" • ");
        }
        return el.subtitle || el.description || "Premium apartment in Dubai";
      })();

      return {
        title,
        image:
          el.image ||
          (el.gallery && el.gallery[0]) ||
          "/static/images/premium-properties/calvalli-tower.png",
        description: firstText,
        address: el.address || el.location || "Dubai, UAE",
        href: "/details",
      };
    })
    .filter(Boolean);

  const displayed = normalized.slice(0, 5);
  if (!displayed || displayed.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-6 flex items-baseline justify-between">
          <div>
            <h3 className="text-white text-base font-medium">Properties</h3>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold mt-1">
              Recents
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayed.map((p: any, idx: number) => (
            <article
              key={p.title + idx}
              className="bg-[var(--color-base-1)] rounded-lg overflow-hidden p-4 flex flex-col h-full"
            >
              <div className="w-full h-40 rounded-md overflow-hidden bg-gray-800">
                <Image
                  src={p.image}
                  alt={p.title || "Property"}
                  width={600}
                  height={320}
                  className="object-cover w-full h-full"
                  priority={idx < 2}
                />
              </div>

              <div className="mt-4 flex-1 flex flex-col">
                <h4 className="text-white font-semibold text-lg">{p.title}</h4>
                <div className="text-sm text-white/80 mt-2 flex-1">
                  {p.description}
                </div>

                <div className="mt-4">
                  <Link href={p.href}>
                    <Button
                      ariaLabel={`Contact about ${p.title}`}
                      label="Contact us"
                      variant="filled"
                      size="sm"
                      radius="full"
                      className="bg-[var(--color-primary-1)] text-black"
                      rightIcon={"icon-arrow-right"}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Ensure consistent rounding for inner images */
        .rounded-md img {
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default Recents;
