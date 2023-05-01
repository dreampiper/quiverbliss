import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className=" w-full bg-white p-4 flex gap-2 text-[#282B36] text-xl ">
        <p className=" font-medium">Dreampiper</p>
        <p className=" font-medium">/</p>
        <p>Designs for Orbis Hackathon!</p>
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
              Designs for Orbis Hackathon!
            </p>
            <p className=" text-[#484E62] text-2xl leading-9">
              SMM – A social management app concept I&apos;ve made, this might also
              fit the task management app. Do you want to see it in dark-mode,
              please let me know your thoughts in the comment form below. Thanks
              for your time.
            </p>
          </div>
        </div>
        <div>
          <div className=" w-full h-[50vh] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
