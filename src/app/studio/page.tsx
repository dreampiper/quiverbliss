import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className=" px-8 pb-8 flex w-full flex-col gap-8">
        <div className=" w-full flex gap-4 ">
          <input className=" bg-[#181A1F] border-[#303236] border-[1px] w-full rounded-lg focus:outline-none py-4 px-6" />
          <button className=" px-5 py-4 bg-white whitespace-nowrap text-[#050505] grid place-items-center rounded-lg">
            <p className=" font-semibold">Add New Project</p>
          </button>
        </div>
        <div className=" w-[900px] flex flex-wrap gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
