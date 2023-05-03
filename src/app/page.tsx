import HeaderL from "@/components/HeaderL";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" ">
      <HeaderL />
      <div className=" flex items-center justify-center flex-col relative h-[80vh]">
        <img src="/community.svg" alt="" className=" absolute top-[-60px]" />
        <p className=" text-7xl font-bold w-[55rem] tracking-tight text-center mb-14 font-merienda text-[#444C5A]">
          Design Communities for DAO’s
        </p>
        <Link href={"/communities"} className=" z-10">
          <button className=" bg-[#53d2dd] py-4 px-10 rounded-lg text-white font-bold text-2xl z-10">
            Explore
          </button>
        </Link>
      </div>
      <div className=" bg-white h-[35rem] flex gap-[8rem] items-center pr-[7rem]">
        <img src="/explain1.svg" alt="" />
        <div className=" ml-8 max-w-[30rem]">
          <p className=" text-[#444C5A] font-bold text-5xl  font-merienda mb-4">
            Create Communities
          </p>
          <p className=" text-[#616773] text-3xl tracking-tight">
            Let your community participate in voting on new ideas and projects.
            We believe in the power of democratic decision-making.
          </p>
        </div>
      </div>
      <div className=" bg-[#F2F6F9] h-[35rem] flex gap-[8rem] items-center pr-[7rem] ml-[120px]">
        <div className=" ml-8 max-w-[30rem]">
          <p className=" text-[#444C5A] font-bold text-5xl font-merienda mb-4">
            Feature Artboards
          </p>
          <p className=" text-[#616773] text-3xl tracking-tight">
            Import your Figma designs as an artboard with the Quiverbliss Figma
            plugin and share more context on each artboard with video or audio
          </p>
        </div>
        <img src="/explain2.svg" alt="" />
      </div>
      <div className=" bg-white h-[35rem] flex gap-[7rem] items-center justify-start ">
        <img src="/explain3.svg" alt="" />
        <div className=" ml-8 max-w-[30rem]">
          <p className=" text-[#444C5A] font-bold text-5xl font-merienda whitespace-nowrap mb-4">
            Engage Conversations
          </p>
          <p className=" text-[#616773] text-3xl tracking-tight">
            Listen to the community. Consider new perspectives, respond
            thoughtfully and respectfully. Build relationships through
            meaningful conversations.
          </p>
        </div>
      </div>
      <div className=" h-[15rem] grid place-items-center bg-[#243237]">
        <img src="/Quiverbliss.svg" alt="" />
      </div>
    </div>
  );
};

export default page;
