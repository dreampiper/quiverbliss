import { Project } from "@/hooks/polybase";
import Link from "next/link";
import Tag from "./Tag";

interface CardProp {
  project: Project;
}

const Card = ({ project }: CardProp) => {
  return (
    <Link href={`/studio/projects/${project.id}`}>
      <div className=" p-6 gap-6 w-full flex-grow-0 h-[360px] bg-[#181A1F] border-[#303236] rounded-xl border flex flex-col">
        <img src={project.featuredCoverImage} alt="" />
        <div className=" flex flex-col gap-4">
          <p className=" text-2xl tracking-tighter">{project.title}</p>
          <Tag />
        </div>
      </div>
    </Link>
  );
};

export default Card;
