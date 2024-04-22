import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  links: {
    github: string;
    live?: string;
  };
  technologies: string[];
}

export default function ProjectsComponent(props: Project) {
  return (
    <div key={props.id} className="bg-cardBackground rounded-2xl p-4 my-4">
      <div className="flex justify-between items-center pb-2">
        <p className="font-outfit font-bold text-[24px] leading-[33.6px] text-heading">
          {props.title}
        </p>
        <p className="font-mono text-paragraph text-base font-medium leading-7 bg-background px-2 py-[2.8px] rounded-sm">
          {props.year}
        </p>
      </div>
      <p className="font-mono text-paragraph text-base font-medium leading-7">
        {props.description}
      </p>
      <div className="flex flex-wrap py-2">
        {props.technologies.map((technology, index) => (
          <p
            key={index}
            className="font-mono text-paragraph text-xs font-medium bg-gray-200 px-2 py-[2.8px] rounded-2xl mr-2 my-2"
          >
            {technology}
          </p>
        ))}
      </div>
      <div className="flex justify-start items-center">
        {props.links.github ? (
          <Link href={props.links.github}>
            <p className="font-mono text-link text-base font-medium leading-7 mr-2">
              Github →
            </p>
          </Link>
        ) : null}

        {props.links.live ? (
          <Link href={props.links.live}>
            <p className="font-mono text-link text-base font-medium leading-7">
              Live →
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
