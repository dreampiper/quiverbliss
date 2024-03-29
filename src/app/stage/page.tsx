"use client";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => {
    return import("@/components/InfiniteCanvas/editor/Editor");
  },
  { ssr: false }
);

const Page = () => {
  return <Editor />;
};

export default Page;