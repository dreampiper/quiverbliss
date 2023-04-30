import React from "react";
import ConnectButton from "./ConnectButton";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div className=" w-full py-4 px-8 flex justify-between items-center mb-5">
      <img src="/studio-logo.svg" alt="" />
      <HeaderNav />
      <ConnectButton />
    </div>
  );
};

export default Header;
