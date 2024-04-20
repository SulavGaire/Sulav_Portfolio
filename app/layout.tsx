import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";


const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <main>
      <body className={inter.className}>{children}</body>
      <Footer/>
      </main>
    </html>
  );
}
