import React from "react";
import ConnectButtonL from "./ConnectButtonL";

const HeaderL = () => {
  return (
    <div className=" w-full p-4 flex justify-between items-center bg-white">
      <img src="/logo-w.svg" alt="" />
      <ConnectButtonL />
    </div>
  );
};

export default HeaderL;
