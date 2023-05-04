"use client";

import CommunityCard from "@/components/CommunityCard";
import { Community, usePolybase } from "@/hooks/polybase";
import { useEffect, useState } from "react";

const Page = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const { getCommunities, getCommunitiesId } = usePolybase();

  useEffect(() => {
    (async () => {
      const communities = await getCommunities(getCommunitiesId || []);
      setCommunities(communities);
    })();
  }, [getCommunitiesId]);

  return (
    <div className=" pt-10 px-12 flex flex-col gap-10 ">
      <div className=" w-full bg-[#243237] rounded-3xl flex p-6 gap-6 flex-col items-start">
        <div className=" w-[590px] text-white tracking-tighter">
          <p className=" text-4xl w-full tracking-tighter">
            Want to create your own community?
          </p>
          <p className=" text-2xl tracking-tighter">
            creating a community on Quiverbliss is really easy, just click on
            the button below!
          </p>
        </div>
        <button className=" px-[18px] py-[14px] bg-white font-semibold rounded-lg tracking-wider text-[#282B36]">
          Create Community
        </button>
      </div>
      <div className=" w-full flex flex-col gap-6">
        <input
          type="text"
          className=" h-12 px-6 focus:outline-none rounded-lg border-[#F0F1F8] border w-full"
          placeholder="Search..."
        />
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {communities.map((data, i) => (
            <CommunityCard
              id={data.id}
              name={data.name}
              description={data.description}
              avatarUrl={`https://gateway.lighthouse.storage/ipfs/${data.avatarUrl}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
