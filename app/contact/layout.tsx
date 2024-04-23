import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact me here!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
        {children}
    </div>
  )
}
