import Image from "next/image";

interface CoverProp {
  src: string;
  alt?: string;
}

const Cover = ({ src, alt = "" }: CoverProp) => {
  return (
    <section className=" relative flex items-center justify-center w-full h-[16.8rem] overflow-hidden">
    <Image
        {...{ src, alt }}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
        fill
        priority
      />
    </section>
  );
};

export default Cover;
