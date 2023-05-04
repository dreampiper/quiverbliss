"use client";

import Card from "@/components/Card";
import { Project, usePolybase } from "@/hooks/polybase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const {
    setActiveCommunityId,
    getCommunity: community,
    getProjects,
  } = usePolybase();
  const [communityId, setCommunityId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const communityId = "FROM STATE";
    setCommunityId(communityId);
  }, []);

  useEffect(() => {
    if (!communityId) return;
    setActiveCommunityId(communityId);
  }, [communityId]);

  useEffect(() => {
    if (!community) return;
    (async () => {
      const projects = await getProjects(community.projectsId);
      setProjects(projects);
    })();
  }, [community]);

  return (
    <main className="flex flex-col">
      <div className=" px-8 pb-8 flex w-full flex-col gap-8">
        <div className=" w-full flex gap-4 ">
          <input className=" bg-[#181A1F] border-[#303236] border-[1px] w-full rounded-lg focus:outline-none py-4 px-6" />
          <button onClick={() => router.push("/studio/projects/new-project")} className=" px-5 py-4 bg-white whitespace-nowrap text-[#050505] grid place-items-center rounded-lg">
            <p className=" font-semibold">Add New Project</p>
          </button>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
          {projects ? (
            projects.map((project, i) => <Card key={i} {...{ project }} />)
          ) : (
            <>loading...</>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
