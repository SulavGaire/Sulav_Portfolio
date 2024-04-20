'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    const pathname = usePathname();
  return (
    <div>
        <div className="border-2 border-t-black py-4 m-5 ">
        <nav>
      <ul className="flex flex-row">
        <li>
          <Link className={`link ${pathname === '/' ? 'font-bold' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/projects' ? 'font-bold' : ''}`}
            href="/projects"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
        </div>
         
    </div>
  )
}
