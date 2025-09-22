'use client';

import { Hero } from '@/components/Hero';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import useMediaQuery from '@/library/hooks/useMediaQuery';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpenModal(false);
    }
  }, [isMobile]);

  return (
    <div className="h-full flex flex-col max-md:items-center justify-between">
      <div className="flex items-end max-md:items-center max-md:flex-col md:justify-between justify-center md:pr-[250px] max-md:gap-0 relative">
        <Hero />
        {/* <Rise3D /> */}
        {/* <InteractiveRise2 /> */}
        <InteractiveRise />
        <div className="md:hidden">
          <Products onClick={handleProductClick} />
        </div>
      </div>
      <div className="flex items-center max-md:flex-col md:justify-between justify-center">
        <Team />
        <div className="max-md:hidden">
          <Socials />
        </div>
      </div>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {selectedProduct ? <ProductPreview product={selectedProduct} /> : null}
      </Modal>
    </div>
  );
}
