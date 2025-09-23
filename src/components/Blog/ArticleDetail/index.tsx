import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

const renderContentElement = (el: any, idx: number) => {
  if (!el) return null;
  switch (el.type) {
    case "text":
      return (
        <p key={idx} className="mb-6 text-sm md:text-base text-white/90">
          {el.text}
        </p>
      );
    case "image":
      return (
        <div key={idx} className="mb-6 w-full rounded-lg overflow-hidden">
          <Image
            src={el.image}
            alt={`article-image-${idx}`}
            width={900}
            height={520}
            className="object-cover w-full h-auto"
          />
        </div>
      );
    case "list":
      return (
        <ul
          key={idx}
          className="mb-6 list-disc list-inside text-sm text-white/80 space-y-2"
        >
          {(el.items || []).map((it: string, i: number) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div key={idx} className="mb-4 text-sm font-semibold text-white">
          {el.text}
        </div>
      );
    case "container":
      // container with columns: each column has width and children
      return (
        <div key={idx} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {(el.columns || []).map((col: any, ci: number) => (
            <div key={ci} style={{ width: col.width || "auto" }}>
              {(col.children || []).map((child: any, chi: number) =>
                renderContentElement(child, `${idx}-${ci}-${chi}` as any)
              )}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export const ArticleDetail: React.FC = () => {
  const article = Content.articleDetail as any;
  if (!article) return null;

  return (
    <article className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column - small image and meta */}
          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden bg-[var(--color-base-1)] p-4">
              <div className="w-full h-40 md:h-56 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill={false}
                  width={520}
                  height={420}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-4 text-white/80 text-sm">
                <div className="font-semibold">{article.title}</div>
                <div className="mt-1">{article.subtitle}</div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              {article.title}
            </h1>
            <h2 className="text-lg md:text-xl font-light mt-2 text-white/90">
              {article.subtitle}
            </h2>

            <div className="mt-6 prose prose-invert max-w-none text-sm md:text-base">
              {(article.content || []).map((c: any, i: number) =>
                renderContentElement(c, i)
              )}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/blog">
                <Button
                  ariaLabel="Back to blog"
                  label="Back to Blog"
                  variant="outlined"
                  size="md"
                  radius="full"
                />
              </Link>

              <Link href="/contact-us">
                <Button
                  ariaLabel="Contact us about article"
                  label="Contact Us"
                  variant="filled"
                  size="md"
                  radius="full"
                  className="bg-[var(--color-primary-1)] text-black"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .prose img {
          border-radius: 12px;
        }
      `}</style>
    </article>
  );
};

export default ArticleDetail;
