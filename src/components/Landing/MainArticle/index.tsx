import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const MainArticle = () => {
  const { title, subtitle, content, image, featured } =
    Content.mainArticle as any;

  const paragraphs = (content || []).filter((c: any) => c.type === "text");

  return (
    <section className="py-[clamp(2rem,_-0.833rem_+_5.903vw,_6.25rem)] w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="flex items-start max-md:flex-col gap-8">
          {/* Left image */}
          <div className="rounded-[20px] overflow-hidden max-md:w-full md:!w-[clamp(18.75rem,_11.75rem_+_14.583vw,_29.25rem)] max-md:max-h-[420px]">
            <Image
              src={image}
              alt={title}
              width={468}
              height={680}
              className="w-full h-full object-top object-cover"
              priority
            />
          </div>

          {/* Right content */}
          <div className="w-full text-white leading-[1.1]">
            <h3 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
              {title}
            </h3>
            <h2 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
              {subtitle}
            </h2>

            <div className="mt-6 prose prose-invert max-w-none text-sm md:text-base">
              {paragraphs.map((p: any, i: number) => (
                <p
                  key={i}
                  className="mb-4 text-white font-normal text-[clamp(0.625rem,_0.375rem_+_0.521vw,_1rem)]"
                >
                  {p.text}
                </p>
              ))}
            </div>

            <div className="flex items-end gap-3 mt-6">
              <div className="text-white font-normal text-xs">Featured in</div>
              {featured && (
                <Image
                  src={featured}
                  alt="featured"
                  width={140}
                  height={34}
                  className="object-contain"
                />
              )}
            </div>
            <div className="md:mt-10 mt-6">
              <Link href="/articles/main-article">
                <Button
                  ariaLabel="View article"
                  label="View Article"
                  variant="filled"
                  size="md"
                  radius="full"
                  rightIcon="icon-arrow-right"
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
