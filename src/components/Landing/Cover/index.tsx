import Image from "next/image";
import Link from "next/link";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/Button";

export const Cover = () => {
  const { title, subtitle } = Content.cover;

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-primary-9">
      {/* fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/static/images/cover/cover-background.png"
          alt="cover background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex items-center gap-8">
        {/* Texto principal */}
        <div className="flex-1 text-white max-w-xl">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight">
            {title}
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
            {subtitle}
          </h3>

          <div className="mt-8">
            <Link href="/contact-us">
              <Button
                ariaLabel="Contact us"
                label="Contact us"
                variant="filled"
                size="lg"
                radius="full"
                className="bg-[#E9D49A] text-gray-900 hover:bg-[#f0db9f]"
              />
            </Link>
          </div>
        </div>

        {/* Imagen decorativa a la derecha (oculta en móvil) */}
        <div className="hidden md:block md:w-1/2 lg:w-2/5 relative">
          <Image
            src="/static/images/cover/burj-khalifa.png"
            alt="Burj Khalifa"
            width={900}
            height={520}
            className="rounded-[28px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
