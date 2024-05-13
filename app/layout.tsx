import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body>
        <div className="flex flex-col items-center mx-4">
          <div className="max-w-screen-sm w-auto ">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
