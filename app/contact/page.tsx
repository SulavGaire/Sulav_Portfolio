import Profileimage from "@/components/profileimage";
import data from "@/app/Data/data.json";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Profileimage />
      <div className="my-8">
        <p className="font-mono font-medium text-base text-paragraph leading-7 mt-4 mb-8">
          Get in touch :
        </p>
            {data.Social.map((social, index) => (
              <div key={social.id} className="flex flex-row justify-between items-center">
              <p className="font-mono font-medium text-paragraph text-base leading-7 mr-2">{social.name}</p>
              <Link href={social.link} target="_blank" rel="noopener noreferrer">
              <p className="font-mono font-medium text-paragraph text-base leading-7">{social.handel} →</p>
             </Link>
              </div>
            ))}
      </div>
    </>
  );
}
