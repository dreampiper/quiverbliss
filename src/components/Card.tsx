import React from "react";
import Tag from "./Tag";

const Card = () => {
  return (
    <div className=" p-6 gap-6 w-full flex-grow-0 h-[360px] bg-[#181A1F] border-[#303236] rounded-xl border flex flex-col">
      <img src="/dp.png" alt="" />
      <div className=" flex flex-col gap-4">
        <p className=" text-2xl tracking-tighter">Designs for the Orbis Hack</p>
        <Tag />
      </div>
    </div>
  );
};

export default Card;
