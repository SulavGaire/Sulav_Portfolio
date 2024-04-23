import ProjectsComponent from "@/components/card/projectsComponent";
import projectsData from "@/app/Data/data.json";
import Profileimage from "@/components/profileimage";
import Link from "next/link";

export default function Projects() {
  return (
    <>
    <Profileimage/>
      <p className="font-outfit font-bold text-[32px] tracking-[-0.5px] leading-[44.6px] text-heading py-4">Projects</p>

      <p className="flex justify-center font-sans font-medium text-paragraph text-base p-2">
      <b><i>&quot;Check my 
        <Link href="https://github.com/SulavGaire/"> <u>github</u> </Link>for more&quot;</i></b>
    </p>

      {projectsData.projects.map(project => (
        <ProjectsComponent
          key={project.id}
          id={project.id} // Assuming each project has a unique ID
          title={project.name}
          category={project.category}
          description={project.description}
          year={project.date}
          links={project.links}
          technologies={project.technologies}
        />
      ))}
    </>
  )
}
