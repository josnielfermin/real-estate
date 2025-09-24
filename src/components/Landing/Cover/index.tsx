import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";
import useMediaQuery from "@/library/hooks/useMediaQuery";

export const Cover = () => {
  const { title, subtitle } = Content.cover;
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div className="w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] max-md:mt-4">
      <section className="relative overflow-hidden rounded-[28px] max-w-[1704px] w-full mx-auto h-[612px] max-xs:h-[400px] flex items-center px-[clamp(0.875rem,_-1.458rem_+_4.861vw,_4.375rem)] max-md:pt-[35px] max-md:items-start">
        {/* fondo decorativo */}
        <div className="absolute inset-0 cover">
          {/* <Image
            src="/static/images/cover/cover-background.png"
            alt="cover background"
            fill
            className="object-cover"
            priority
          /> */}
          {/* <Image
            src="/static/images/cover/mask.svg"
            alt="cover background"
            fill
            className="object-cover object-bottom-right"
            priority
          /> */}
          <Image
            src="/static/images/cover/burj-khalifa.png"
            alt="Burj Khalifa"
            width={852}
            height={612}
            className="rounded-[28px] absolute right-0 bottom-0 max-xs:hidden"
            priority
          />
          <Image
            src="/static/images/cover/burj-khalifa-mobile.png"
            alt="Burj Khalifa"
            width={350}
            height={251}
            className="rounded-[28px] absolute right-0 bottom-0 xs:hidden"
            priority
          />
          <div className="absolute inset-0" />
        </div>
        <div className="flex items-center gap-8">
          {/* Texto principal */}
          <div className="flex-1 text-white max-w-xl">
            <h2 className="text-[clamp(2rem,_0.833rem_+_2.431vw,_3.75rem)] font-normal leading-[1.1] max-md:leading-[1] max-w-[325px]">
              {title}
            </h2>
            <h3 className="text-[clamp(2.125rem,_0.875rem_+_2.604vw,_4rem)] font-bold leading-[1.1] max-md:leading-[1] mt-2">
              {subtitle}
            </h3>
            <div className="md:mt-8 mt-3">
              <Link href="/contact-us">
                <Button
                  ariaLabel="Contact us"
                  label="Contact Us"
                  rightIcon={<span className="icon-arrow-right" />}
                  variant="filled"
                  size={isMobile ? "sm" : "md"}
                  radius="full"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
