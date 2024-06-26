import Profileimage from '@/components/profileimage'
import data from '@/app/Data/data.json'
import Link from 'next/link'
export default function thoughts() {
  return (
    <>
    <Profileimage/>
    <div className="mt-8 py-4">
    <h2 className="font-outfit font-bold text-[32px] text-heading leading-[44.8px] tracking-[-0.5px] mb-4">
      Grab a ☕️ and have a read
    </h2>
    
    <div className='border-b-[1px] border-black '></div>
    {data.Thoughts.map((thought, index) => (
      <div key={thought.id} className="flex flex-row justify-between items-center border-b-[1px] border-black py-4 hover:scale-105 transition-all">
        <Link href={thought.link}>
          <p className="font-mono font-medium text-paragraph text-base leading-7 hover:font-bold">{thought.title}</p>
        </Link>
      </div>
    ))}
    </div>
    <p className="flex justify-center font-sans font-medium text-paragraph text-base p-6">
      <b><i>&quot;One thing I know is I know nothing&quot;</i></b>
    </p>
    </>
  )
}
