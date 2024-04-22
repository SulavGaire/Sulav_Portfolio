import Profileimage from "@/components/profileimage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-8">
      <Profileimage/>
      <h1 className="font-outfit font-bold text-4xl text-heading leading-[43.2px] tracking-[-1.5px] my-8">
        <ul>Hey, I&apos;m Sulav Gaire.</ul>
        <ul>I&apos;m a Electronics & Information Engineer based in Kathmandu, Nepal.</ul>
      </h1>
      <p className="font-mono font-medium text-base text-paragraph leading-7 mb-8">
      Right now, I’ve just completed my bachelor&apos;s from 
      <Link href="https://ioepas.edu.np/" target="_blank" rel="noopener noreferrer" className="mx-2">
       <u>IOE WRC</u>.
      </Link>
      I&apos;m also working on my own 
      <Link href="/projects" className="mx-2">
       <u>projects</u>,
       </Link>
       sharing my 
       <Link href="/thoughts" className="mx-2">
       <u>thoughts</u>
       </Link>
      on my blog and I document my whole journey on my
      <Link href="/contact" className="mx-2">
       <u>socials</u>.
       </Link>
      </p>
      <p className="font-mono font-medium text-base text-paragraph leading-7 mb-8">
        <Link href="/contact">
      Get in touch →
      </Link>
      </p>
    </div>
  );
}
