import React from "react";
import Tag from "./Tag";

const CardL = () => {
  return (
    <div className=" p-6 gap-6 w-[420px] flex-grow-0 h-[360px] bg-white border-[#F0F1F8] rounded-xl border flex flex-col">
      <img src="/dp.png" alt="" />
      <div className=" flex flex-col gap-4">
        <p className=" text-2xl tracking-tighter">Designs for the Orbis Hack</p>
        <Tag />
      </div>
    </div>
  );
};

export default CardL;
