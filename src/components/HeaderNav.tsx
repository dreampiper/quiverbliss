"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const HeaderNav = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const navItem = [
    { name: "DASHBOARD", href: "/studio" },
    { name: "PROJECTS", href: "/studio/project/new-project" },
    { name: "CUSTOMIZE", href: "/studio/create-community" },
  ];
  return (
    <div className=" flex gap-[16px] items-center">
      {navItem.map((item, i) => (
        <Link className="font-medium" key={i} href={`${item.href}`}>
          {item.name}
        </Link>
        
      ))}
    </div>
  );
};

export default HeaderNav;
