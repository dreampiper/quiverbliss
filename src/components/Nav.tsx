"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import path from "path";

const Nav = () => {
  const navItem = [
    { name: "home", href: "/dreampiper" },
    { name: "projects", href: "/dreampiper/projects" },
  ];
  const pathname = usePathname();
  const path = pathname.split('/')[1]

  return (
    <div className="flex gap-10 w-full justify-center">
      {navItem.map((item, i) => (
        <Link
          className=" font-medium text-xl text-[#282B36] uppercase"
          key={i}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
