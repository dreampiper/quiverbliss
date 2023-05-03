"use client";

import Card from "@/components/Card";
import { usePolybase } from "@/hooks/polybase";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  const [communities, setCommunities] = useState<any[]>([]);
  const { getCommunities, getCommunitiesId } = usePolybase();

  useEffect(() => {
    (async () => {
      const communities = await getCommunities(getCommunitiesId || []);
      setCommunities(communities);
    })();
  }, [getCommunitiesId]);

  return (
    <main className="flex flex-col">
      <div className=" px-8 pb-8 flex w-full flex-col gap-8">
        <div className=" w-full flex gap-4 ">
          <input className=" bg-[#181A1F] border-[#303236] border-[1px] w-full rounded-lg focus:outline-none py-4 px-6" />
          <button className=" px-5 py-4 bg-white whitespace-nowrap text-[#050505] grid place-items-center rounded-lg">
            <p className=" font-semibold">Add New Project</p>
          </button>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
          {communities.map((data, i) => (
            <Card />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
