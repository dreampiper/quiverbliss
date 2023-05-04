"use client";

import Toaster from "@/components/Toaster";
import useLightHouse from "@/hooks/lighthouse";
import { usePolybase } from "@/hooks/polybase";
import React, { useRef, useState } from "react";

const Page = () => {
  const { uploadFile, uploadStatuses } = useLightHouse();
  const { createCommunity } = usePolybase();

  const toastRef = useRef<any>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateCommunity() {
    await createCommunity({
      name,
      description,
      avatarUrl: uploadStatuses["avatar"]?.fileStatus?.data.Hash || "",
      bannerImageUrl: uploadStatuses["banner"]?.fileStatus?.data.Hash || "",
      featuredVideoUrl: "",
      featuredCoverImage: uploadStatuses["cover"]?.fileStatus?.data.Hash || "",
    });
    toastRef.current && toastRef.current.callToast();
  }

  return (
    <div className=" p-8 gap-8 flex flex-col">
      {/* Basic info */}
      <div className=" flex flex-col gap-8">
        <div className=" flex gap-4 items-center">
          <p className=" text-xl tracking-wider w-min">Basic&nbsp;info</p>
          <hr className=" border-[#303236] border w-full" />
        </div>
        <div>
          <p className=" text-xl tracking-wider">Name</p>
          <p className=" tracking-wider">
            Choose a name that represents your community.
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" bg-[#181A1F] border-[#303236] border-[1px] max-w-[650px] w-full rounded-lg focus:outline-none py-4 px-6 mt-4"
          />
        </div>
        <div>
          <p className=" text-xl tracking-wider">Description</p>
          <p className=" tracking-wider">
            Tell viewers more about your community.
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" bg-[#181A1F] border-[#303236] border-[1px] max-w-[650px] w-full rounded-lg focus:outline-none py-4 px-6 mt-4"
          />
        </div>
      </div>
      {/*  */}
      {/* Branding */}
      <div className=" flex flex-col gap-8">
        <div className=" flex gap-4 items-center">
          <p className=" text-xl tracking-wider">Branding</p>
          <hr className=" border-[#303236] border w-full" />
        </div>
        {/* Avatar upload */}
        <div className=" gap-4 flex flex-col items-start">
          <div>
            <p className=" text-xl tracking-wider">Avatar</p>
            <p className=" tracking-wider">
              This image should represent the community, it could be a logo or
              what fits best.
            </p>
          </div>
          <div className="flex items-center">
            <button className="relative bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
              <img src="/avatarCommunity.svg" alt="" />
              <input
                className="absolute opacity-0 w-full h-full left-0 top-0"
                name="img"
                type="file"
                accept="image/*"
                onChange={async (e) => await uploadFile(e, "avatar")}
              />
              <p className=" text-[#050505] font-semibold">Change Avatar</p>
            </button>
            <p>&nbsp;&nbsp;{uploadStatuses["avatar"]?.percentage}</p>
          </div>
          <div>
            <img src="/dp.png" alt="" />
          </div>
        </div>
        {/* banner upload */}
        <div className=" gap-4 flex flex-col items-start">
          <div>
            <p className=" text-xl tracking-wider">Banner image</p>
            <p className=" tracking-wider">
              This image will appear across the top of your page.
            </p>
          </div>
          <div className="flex items-center">
            <button className="relative bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
              <img src="/bannerCommunity.svg" alt="" />
              <input
                className="absolute opacity-0 w-full h-full left-0 top-0"
                name="img"
                type="file"
                accept="image/*"
                onChange={async (e) => await uploadFile(e, "banner")}
              />
              <p className=" text-[#050505] font-semibold">Change Banner</p>
            </button>
            <p>&nbsp;&nbsp;{uploadStatuses["banner"]?.percentage}</p>
          </div>
          <div>
            <img src="/dp.png" alt="" />
          </div>
        </div>
        {/* video upload */}
        {/* <div className=" gap-4 flex flex-col items-start">
          <div>
            <p className=" text-xl tracking-wider">Featured video (optional)</p>
            <p className=" tracking-wider">
              Highlight a short video to watch, that explains what your
              community is all about.
            </p>
          </div>
          <button className=" bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
            <img src="/video_studio.svg" alt="" />
            <p className=" text-[#050505] font-semibold">Change Video</p>
          </button>
          <div>
            <img src="/dp.png" alt="" />
          </div>
        </div> */}
        {/* cover upload */}
        <div className=" gap-4 flex flex-col items-start">
          <div>
            <p className=" text-xl tracking-wider">Cover (optional)</p>
            <p className=" tracking-wider">
              Select or upload a picture that shows what&apos;s in your video.
            </p>
          </div>
          <div className="flex items-center">
            <button className="relative bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
              <img src="/video_studio.svg" alt="" />
              <input
                className="absolute opacity-0 w-full h-full left-0 top-0"
                name="img"
                type="file"
                accept="image/*"
                onChange={async (e) => await uploadFile(e, "cover")}
              />
              <p className=" text-[#050505] font-semibold">Change Cover</p>
            </button>
            <p>&nbsp;{uploadStatuses["cover"]?.percentage}</p>
          </div>
          <div>
            <img src="/dp.png" alt="" />
          </div>
        </div>
      </div>
      <Toaster ref={toastRef} title={"Saved data"} />

      <button
        onClick={handleCreateCommunity}
        className="relative bg-white flex justify-center px-[18px] py-[14px] gap-4 rounded-lg"
      >
        <p className=" text-[#050505] font-semibold">Create Community</p>
      </button>
    </div>
  );
};

export default Page;
