import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Estate",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <div className="flex min-h-screen text-white overflow-hidden relative z-0 max-w-[1920px] mx-auto">
          <main className="flex-1 flex flex-col overflow-hidden relative z-10">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
