import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import FollowButton from "@/components/FollowButton";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-16">
        <div className=" ">
          <Cover src={"/banner.png" || ""} />
          <Avatar src={"/banner-logo.png" || ""} />
        </div>
        <Nav />
      </div>
      <main className="flex flex-col">
        <div className=" flex flex-col gap-16 pt-[40px] px-10">
          <div className=" w-full flex gap-10">
            <div className=" min-w-[360px] max-w-[560px] w-full h-[315px] relative">
              <div className=" relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={"/video.png"}
                  style={{
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                  fill
                  priority
                  alt={""}
                />
              </div>
              <img
                src="/play.svg"
                className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
            </div>
            <div className=" w-full">
              <p className=" text-[45px] tracking-[.1em] font-medium">
                DREAMPIPER
              </p>
              <p className=" font-light text-[40px] mb-5">
                A design platform for teams who build products together
              </p>
              <FollowButton />
            </div>
          </div>
          {/*  */}
          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
            <CardL />
            <CardL />
            <CardL />
          </div>
        </div>
      </main>
    </>
  );
}
