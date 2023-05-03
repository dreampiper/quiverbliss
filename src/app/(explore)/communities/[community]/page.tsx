"use client";

import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import FollowButton from "@/components/FollowButton";
import Nav from "@/components/Nav";
import { Project, usePolybase } from "@/hooks/polybase";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
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

      <main className="flex flex-col">
        <div className=" flex flex-col gap-16 pt-[40px] px-10">
          <div className=" w-full flex gap-10">
            <div className=" min-w-[360px] max-w-[560px] w-full h-[315px] relative">
              <div className=" relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={`${community.featuredCoverImage}`}
                  style={{
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                  fill
                  priority
                  alt={""}
                />
              </div>
              <img
                src="/play.svg"
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
            </div>

            <div className=" w-full">
              <p className=" text-[45px] tracking-[.1em] font-medium uppercase">
                {community.name}
              </p>
              <p className=" font-light text-[40px] mb-5">
                {community.description}
              </p>
              <FollowButton />
            </div>
          </div>

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
}
