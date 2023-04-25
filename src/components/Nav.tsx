import React from "react";

const Nav = () => {
  const navItem = ["home", "projects", "members", "about"];
  return (
    <div className="flex gap-10 w-full justify-center">
      {navItem.map((item, i) => (
        <button className=" font-medium text-xl text-[#282B36] uppercase" key={i}>{item}</button>
      ))}
    </div>
  );
};

export default Nav;
