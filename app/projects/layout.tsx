import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I have worked on",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
