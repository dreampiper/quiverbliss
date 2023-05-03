"use client";

import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import Nav from "@/components/Nav";
import { Project, usePolybase } from "@/hooks/polybase";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const pathname = usePathname();
  const {
    setActiveCommunityId,
    getCommunity: community,
    getProjects,
  } = usePolybase();
  const [navItems, setNavItems] = useState<any>([]);
  const [communityId, setCommunityId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const cleanPath = pathname.split("#")[0].split("?")[0];
    const parts = cleanPath.split("/");
    const communityId = parts.length > 2 ? parts[2] : null;
    setCommunityId(communityId);
  }, [pathname]);

  useEffect(() => {
    if (!communityId) return;
    setActiveCommunityId(communityId);
    setNavItems([
      { name: "home", href: `/communities/${communityId}` },
      { name: "projects", href: `/communities/${communityId}/projects` },
    ]);
  }, [communityId]);

  useEffect(() => {
    if (!community) return;
    (async () => {
      const projects = await getProjects(community.projectsId);
      setProjects(projects);
    })();
  }, [community]);

  if (!community) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className=" flex flex-col gap-16">
        <div className=" ">
          <Cover src={`${community.bannerImageUrl}`} />
          <Avatar src={`${community.avatarUrl}`} />
        </div>
        <Nav navItems={navItems} />
      </div>

      <main className=" px-10 mt-16">
        <div className=" flex flex-col gap-6">
          <input
            type="text"
            className=" h-12 px-6 focus:outline-none rounded-lg border-[#F0F1F8] border"
            placeholder="Search..."
          />

          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
            {projects ? (
              projects.map((project, i) => <CardL key={i} {...{ project }} />)
            ) : (
              <>loading...</>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
