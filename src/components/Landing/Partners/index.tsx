import Image from "next/image";
import { Content } from "@/components/content";

export const Partners = () => {
  const logos = Content.partners.map((p) => p.logo);

  // Repetimos la secuencia para permitir un loop continuo
  const repeated = [...logos, ...logos];

  return (
    <section className="py-6 bg-primary-9">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="overflow-hidden"
          role="region"
          aria-label="Partners carousel"
        >
          <div className="partners-track flex items-center gap-8">
            {repeated.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="partners-item flex-shrink-0 w-40 h-12 flex items-center justify-center opacity-80"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${idx + 1}`}
                  width={160}
                  height={48}
                  className="object-contain"
                  priority={idx < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-track {
          display: flex;
          gap: 32px;
          align-items: center;
          /* Duplicamos el contenido en markup y animamos -50% para crear un loop continuo */
          animation: scroll-left 28s linear infinite;
          will-change: transform;
        }

        .partners-item img {
          filter: brightness(0) invert(1);
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Ajustes para pantallas pequeñas: reducir tamaños y gaps */
        @media (max-width: 640px) {
          .partners-item {
            width: 28vw;
            height: 48px;
          }
          .partners-track {
            gap: 16px;
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
