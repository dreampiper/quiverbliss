import React from "react";

const page = () => {
  return (
    <div className=" px-8">
      <div className=" flex gap-2 text-xl py-4 mb-5">
        <p className=" font-medium">PROJECTS</p>
        <p className=" font-medium">/</p>
        <p>NEW PROJECT</p>
      </div>
      {/* work on the layout */}
      <div className=" py-8 gap-8 flex flex-col">
        {/* Details */}
        <div className=" flex flex-col gap-8">
          <div className=" flex gap-4 items-center">
            <p className=" text-xl tracking-wider">Details</p>
            <hr className=" border-[#303236] border w-full" />
          </div>
          <div>
            <p className=" text-xl tracking-wider">Title</p>
            <p className=" tracking-wider">
              Give a suitable title for your project.
            </p>
            <input className=" bg-[#181A1F] border-[#303236] border-[1px] max-w-[650px] w-full rounded-lg focus:outline-none py-4 px-6 mt-4" />
          </div>
          <div>
            <p className=" text-xl tracking-wider">Description</p>
            <p className=" tracking-wider">Tell viewers about your project.</p>
            <textarea className=" bg-[#181A1F] border-[#303236] border-[1px] max-w-[650px] w-full rounded-lg focus:outline-none py-4 px-6 mt-4" />
          </div>
        </div>
        {/*  */}
        {/* Featured */}
        <div className=" flex flex-col gap-8">
          <div className=" flex gap-4 items-center">
            <p className=" text-xl tracking-wider">Featured</p>
            <hr className=" border-[#303236] border w-full" />
          </div>
          {/* video upload */}
          <div className=" gap-4 flex flex-col items-start">
            <div>
              <p className=" text-xl tracking-wider">Video (optional)</p>
              <p className=" tracking-wider">
                Upload a video, we recommend it’s less than 5 minutes long.
              </p>
            </div>
            <button className=" bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
              <img src="/video_studio.svg" alt="" />
              <p className=" text-[#050505] font-semibold">Change Video</p>
            </button>
            <div>
              <img src="/dp.png" alt="" />
            </div>
          </div>
          {/* cover upload */}
          <div className=" gap-4 flex flex-col items-start">
            <div>
              <p className=" text-xl tracking-wider">Cover</p>
              <p className=" tracking-wider">
                Upload a picture that represents this project, or shows what&apos;s
                in your video.
              </p>
            </div>
            <button className=" bg-white flex px-[18px] py-[14px] gap-4 rounded-lg">
              <img src="/video_studio.svg" alt="" />
              <p className=" text-[#050505] font-semibold">Change Cover</p>
            </button>
            <div>
              <img src="/dp.png" alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        {/* Artboards */}
        <div className=" flex flex-col gap-8">
          <div className=" flex gap-4 items-center">
            <p className=" text-xl tracking-wider">Artboards</p>
            <hr className=" border-[#303236] border w-full" />
          </div>
          <div className=" bg-[#181A1F] w-full p-4 flex flex-col gap-8 rounded-lg">
            <p className=" text-[#D9D9D9] text-2xl ">Artboard 1</p>
            <div className=" bg-[#090A0B] py-10 px-5 rounded-lg">
              <div className=" w-32 h-32 bg-[#D9D9D9]"></div>
            </div>
          </div>
          <div className=" flex gap-4">
            <input className=" bg-[#181A1F] border-[#303236] border-[1px] w-[316px] rounded-lg focus:outline-none py-3 px-4" />
            <button className=" bg-white text-[#050505] px-[18px] py-[14px] rounded-lg font-semibold">New Artboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
