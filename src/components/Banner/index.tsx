import { Content } from "@/components/content";

export const Banner = () => {
  const { video } = Content.banner;

  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full rounded-[12px] overflow-hidden h-[360px] md:h-[520px]">
        <video
          src={video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Banner;
