import Link from "next/link";
import React from "react";

const Nav = () => {
  const navItem = [{name: "home", href:"/dreampiper"}, {name: "projects", href:"/dreampiper/projects"}];
  return (
    <div className="flex gap-10 w-full justify-center">
      {navItem.map((item, i) => (
        <Link className=" font-medium text-xl text-[#282B36] uppercase" key={i} href={item.href}>{item.name}</Link>
      ))}
    </div>
  );
};

export default Nav;
