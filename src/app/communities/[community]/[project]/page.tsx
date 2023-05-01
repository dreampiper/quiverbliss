import React from "react";
import Image from "next/image";

const page = () => {
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
        description:
          "SMM – A social management app concept I've made, this might also fit the task management app. Do you want to see it in dark-mode, please let me know your thoughts in the comment form below.Thanks for your time.",
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
    <div>
      <div className=" w-full bg-white p-4 flex gap-2 text-[#282B36] text-xl ">
        <p className=" font-medium">{communities.name}</p>
        <p className=" font-medium">/</p>
        <p>{communities.activeProjects[0].title}</p>
      </div>
      <div className=" px-12 gap-16 flex flex-col mt-10">
        <div className=" h-80 flex gap-8">
          <section className=" relative flex items-center justify-center w-[560px] h-full overflow-hidden rounded-lg">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              fill
              priority
              src={"/dp.png"}
              alt={"video cover"}
            />
          </section>
          <div className=" w-[570px]">
            <p className=" text-[#282B36] text-4xl tracking-tighter">
              {communities.activeProjects[0].title}
            </p>
            <p className=" text-[#484E62] text-2xl leading-9">
              {communities.activeProjects[0].description}
            </p>
          </div>
        </div>
        <div>
          <div className=" w-full h-[50vh] bg-black rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
