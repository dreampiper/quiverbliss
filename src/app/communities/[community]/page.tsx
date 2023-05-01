"use client";

import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import FollowButton from "@/components/FollowButton";
import Nav from "@/components/Nav";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const communities = {
    id: "com-001",
    name: "Dreampiper",
    description: "A design platform for teams who build products together",
    avatarUrl: "dp.png",
    bannerImageUrl: "banner.png",
    featuredVideoUrl: "https://example.com/featured-video1.mp4",
    featuredCoverImage: "video.png",
    publicKey: "abc123",
    activeProjects: [
      {
        id: "proj-001",
        title: "Active Project 1",
        description: "A description of Active Project 1",
        featuredVideoUrl: "https://example.com/active-project1.mp4",
        featuredCoverImage: "https://example.com/active-project1-cover.jpg",
        publicKey: "abc123",
        figmaFramesURL: [
          "https://example.com/figma-frame1",
          "https://example.com/figma-frame2",
        ],
        updatedAt: 1645008000, // Unix timestamp for May 17th, 2022
        createdAt: 1643059200, // Unix timestamp for January 24th, 2022
      },
      {
        id: "proj-002",
        title: "Active Project 2",
        description: "A description of Active Project 2",
        featuredVideoUrl: "https://example.com/active-project2.mp4",
        featuredCoverImage: "https://example.com/active-project2-cover.jpg",
        publicKey: "abc123",
        figmaFramesURL: [
          "https://example.com/figma-frame3",
          "https://example.com/figma-frame4",
        ],
        updatedAt: 1645008000, // Unix timestamp for May 17th, 2022
        createdAt: 1643059200, // Unix timestamp for January 24th, 2022
      },
    ],
    updatedAt: 1645008000, // Unix timestamp for May 17th,
  };

  return (
    <>
      <div className=" flex flex-col gap-16">
        <div className=" ">
          <Cover src={`/${communities.bannerImageUrl}`} />
          <Avatar src={`/${communities.avatarUrl}`} />
        </div>
        <Nav />
      </div>
      <main className="flex flex-col">
        <div className=" flex flex-col gap-16 pt-[40px] px-10">
          <div className=" w-full flex gap-10">
            <div className=" min-w-[360px] max-w-[560px] w-full h-[315px] relative">
              <div className=" relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={`/${communities.featuredCoverImage}`}
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
                {communities.name}
              </p>
              <p className=" font-light text-[40px] mb-5">
                {communities.description}
              </p>
              <FollowButton />
            </div>
          </div>
          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
            {communities.activeProjects.map((project, i) => (
              <CardL title={project.title} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
