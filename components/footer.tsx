"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="border-t-[1px] border-black py-4 mb-5 font-medium font-mono text-xs text-paragraph flex flex-col md:flex-row justify-between w-[95%] md:w-[50%] px-5">
      <p className="mr-4 my-1">© 2024 - Sulav Gaire</p>
      <nav className="flex flex-row my-1">
        {navLinks.map(({ href, label }, index) => (
          <div key={index} className="mr-2 hover:font-semibold">
            <Link
              className={`link ${pathname === href ? "font-bold" : ""}`}
              href={href}
            >
              {label}
            </Link>
            {index < navLinks.length - 1 && <span className="mx-2">/</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}
