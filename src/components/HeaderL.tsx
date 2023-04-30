import React from "react";
import ConnectButtonL from "./ConnectButtonL";

const Header = () => {
  return (
    <div className=" w-full py-4 px-8 flex justify-between items-center bg-white">
      <img src="/logo-w.svg" alt="" />
      <ConnectButtonL />
    </div>
  );
};

export default Header;
