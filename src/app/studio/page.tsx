import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className=" px-8 pb-8 flex w-full flex-col gap-8">
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full "></div>
      </div>
    </main>
  );
}
