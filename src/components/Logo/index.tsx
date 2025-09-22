"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 84, height = 35.94 }: LogoProps) => {
  const router = useRouter();

  return (
    <>
      <Button
        label="LOGO"
        ariaLabel="Logo"
        variant="filled"
        radius="full"
        onClick={() => router.push("/")}
      />
    </>
  );
};
