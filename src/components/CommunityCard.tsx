import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ICommCard {
  name: string;
  description: string;
  avatarUrl: string;
}

const CommunityCard = (commCard: ICommCard) => {
  return (
    <Link href={`/${commCard.name}`}>
      <div className=" w-full p-6 gap-6 bg-white border-[#F0F1F8] border rounded-xl flex cursor-pointer">
        <div className=" relative flex items-center justify-center min-w-[100px] h-[100px] overflow-hidden rounded-full z-[1]">
          <Image
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
            fill
            priority
            src={`/${commCard.avatarUrl}`}
            alt={""}
          />
        </div>
        <div>
          <p className=" font-medium text-2xl tracking-widest text-[#282B36]">
            {commCard.name}
          </p>
          <p className=" font-light text-[#484E62]">{commCard.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CommunityCard;
