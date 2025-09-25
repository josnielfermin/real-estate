import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";
import useMediaQuery from "@/library/hooks/useMediaQuery";

export const PremiumProperties = () => {
  const { title, subtitle, items } = Content.premiumProperties;
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Ensure we have a predictable number of items
  const displayed = items.slice(0, 7);

  const getRowSpan = (prop: any) => {
    const h = isMobile ? prop?.heightMobile : prop?.height;
    let px = 320; // default

    if (!h) px = 320;
    else if (typeof h === "number") px = h;
    else if (typeof h === "string") {
      if (/^\d+$/.test(h)) px = parseInt(h, 10);
      else if (h.endsWith("px")) px = parseInt(h, 10);
      // si viniera en %, vh, etc. puedes normalizarlo o dejar default
    }

    // dividir entre el tamaño base (10px) para saber cuántas filas ocupa
    return Math.ceil(px / 10);
  };

  return (
    <section className="py-12 w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)]">
      <div className="max-w-[1704px] w-full mx-auto">
        <div className="mb-8 leading-[1.1]">
          <h3 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-normal">
            {title}
          </h3>
          <h2 className="text-white text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] font-bold">
            {subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Remaining items */}
          {displayed.map((prop, idx) => {
            const rowSpan = getRowSpan(prop);
            return (
              <article
                key={idx}
                className={`relative rounded-[20px] overflow-hidden bg-base-1 group`}
                style={{ gridRow: `span ${rowSpan}` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    priority={idx < 3}
                  />

                  <div className="absolute left-0 bottom-0 right-0 z-10 text-white w-full px-[clamp(0.375rem,_-0.375rem_+_1.563vw,_1.5rem)] py-[clamp(0.375rem,_-0.708rem_+_2.257vw,_2rem)] bg-[rgba(0,0,0,0.20)] backdrop-blur-[10px] transition-all !duration-300 group-hover:opacity-100 opacity-0">
                    <h3 className="text-[clamp(0.75rem,_-0.083rem_+_1.736vw,_2rem)] font-bold">
                      {prop.title}
                    </h3>
                    <p className="text-[clamp(0.5rem,_0.167rem_+_0.694vw,_1rem)] mt-2 max-md:mt-0.5">
                      {prop.addressDescription}
                    </p>
                    <p className="text-[clamp(0.5rem,_0.167rem_+_0.694vw,_1rem)] mt-2 max-md:mt-0.5">
                      {prop.description}
                    </p>
                    <div className="md:mt-4 max-md:mb-1">
                      <Link href="/contact-us">
                        <Button
                          ariaLabel={`Contact about ${prop.title}`}
                          label="Contact us"
                          variant="filled"
                          size="sm"
                          radius={isMobile ? "md" : "full"}
                          rightIcon={"icon-arrow-right"}
                          className="max-md:text-[8px] max-md:h-4 max-md:px-1.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/properties">
            <Button
              ariaLabel="View all properties"
              label="View All Properties"
              variant="filled"
              size="md"
              radius="full"
              rightIcon="icon-arrow-right"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumProperties;
