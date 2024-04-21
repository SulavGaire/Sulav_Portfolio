import Image from "next/image";

export default function Profileimage() {
  return (
    <div className="mt-16 flex justify-start items-center max-w-xs">
      <Image
        src="https://media.licdn.com/dms/image/D5603AQGyuaOQlB5mDQ/profile-displayphoto-shrink_800_800/0/1692192268256?e=1719446400&v=beta&t=AggnKT73CsUU1a3KM_P3Vq8VQhXyrLyR2BvkKgFG0O4"
        alt="ProfileImage"
        width={175}
        height={175}
        className="rounded-full"
      />
      <h1 className="font-outfit font-bold text-4xl text-heading ml-4 leading-[43.2px] tracking-[-1.5px] whitespace-nowrap">Sulav Gaire</h1>
    </div>
  );
}
