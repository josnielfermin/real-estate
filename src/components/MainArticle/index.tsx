import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const MainArticle = () => {
  const { title, subtitle, content, image, featured } =
    Content.mainArticle as any;

  const paragraphs = (content || []).filter((c: any) => c.type === "text");

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left image */}
          <div className="lg:col-span-4">
            <article className="rounded-2xl overflow-hidden bg-[var(--color-base-1)]">
              <div className="w-full h-[520px] relative rounded-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 33vw, 100vw"
                  priority
                />
              </div>
            </article>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8 text-white">
            <h3 className="text-base font-medium">{title}</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              {subtitle}
            </h2>

            <div className="mt-6 prose prose-invert max-w-none text-sm md:text-base">
              {paragraphs.map((p: any, i: number) => (
                <p key={i} className="mb-4 text-white/90">
                  {p.text}
                </p>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-6">
              {featured && (
                <div className="w-24 h-12 relative hidden sm:block">
                  <Image
                    src={featured}
                    alt="featured"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div>
                <Link href="/articles/main-article">
                  <Button
                    ariaLabel="View article"
                    label="View Article"
                    variant="filled"
                    size="md"
                    radius="full"
                    className=""
                    style={{
                      background: "var(--color-primary-1)",
                      color: "white",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Slightly increase left image rounding to match design */
        .rounded-2xl img {
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
};

export default MainArticle;
