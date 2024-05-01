"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typewriter } from "./typewriter";

export default function Profileimage() {
  const pathname = usePathname();
  const width = pathname === "/" ? 175 : 100;
  const height = pathname === "/" ? 175 : 100;
  return (<Link href="/">
    <div className="mt-16 flex justify-start items-center max-w-xs hover:scale-105 transition">
      
      <Image
        src="https://media.licdn.com/dms/image/D5603AQGyuaOQlB5mDQ/profile-displayphoto-shrink_800_800/0/1692192268256?e=1719446400&v=beta&t=AggnKT73CsUU1a3KM_P3Vq8VQhXyrLyR2BvkKgFG0O4"
        alt="ProfileImage"
        width={width}
        height={height}
        className="rounded-full"
      />
      { pathname === "/" ? null : <h1 className="font-outfit font-bold text-2xl text-heading ml-4 leading-[43.2px] tracking-[-1.5px] whitespace-nowrap">
      <Typewriter words={["🎓  Learning ", "🌱  Growing" , "⚙️  Grinding "]} /></h1>}
    </div>
    </Link>
  );
}
