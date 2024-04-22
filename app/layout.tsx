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
        <div className="flex justify-center mx-4">
          <div className="max-w-screen-sm w-auto ">
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
