import React from "react";

const Tag = () => {
  const chip = ["on-chain", "feedback", "voting"];
  return (
    <div className=" flex gap-4">
      {chip.map((item, i) => {
        switch (item) {
          case "on-chain":
            return (
              <div className=" w-min whitespace-nowrap text-sm py-[3px] px-[6px] grid place-items-center rounded uppercase bg-purple-300 text-purple-500">
                {item}
              </div>
            );
          case "feedback":
            return (
              <div className=" w-min text-sm py-[3px] px-[6px] grid place-items-center rounded  uppercase bg-[#C2FFD0] text-[#50D255]">
                {item}
              </div>
            );
          case "voting":
            return (
              <div className=" w-min text-sm py-[3px] px-[6px] grid place-items-center rounded uppercase bg-[#C2FAFF] text-cyan-500">
                {item}
              </div>
            );

          default:
            break;
        }
      })}
    </div>
  );
};

export default Tag;
