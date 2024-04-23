import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "A collection of thoughts and ideas",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>{children}</div>
  )
}
