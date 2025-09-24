"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuMobile } from "@/components/Modals/MenuMobile";
import { Modal } from "@/components/ui/Modal";
import { TranslateSelectorMobile } from "../Modals/TranslateSelectorMobile";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTranslateSelectorOpen, setTranslateSelectorOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col overflow-hidden relative z-10">
      <Header
        setMobileMenuOpen={setMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setTranslateSelectorOpen={setTranslateSelectorOpen}
        isTranslateSelectorOpen={isTranslateSelectorOpen}
      />
      <div className="flex-1">{children}</div>
      <Footer />
      <Modal openModal={isMobileMenuOpen} setOpenModal={setMobileMenuOpen}>
        <MenuMobile />
      </Modal>
      <Modal
        openModal={isTranslateSelectorOpen}
        setOpenModal={setTranslateSelectorOpen}
      >
        <TranslateSelectorMobile />
      </Modal>
    </main>
  );
};
