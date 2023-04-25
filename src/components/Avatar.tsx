import Image from "next/image";

interface AvatarProp {
  src: string;
  alt?: string;
}

const Avatar = ({ src, alt = "" }: AvatarProp) => {
  return (
    <div className=" relative flex items-center justify-center w-40 h-40 overflow-hidden rounded-full  mt-[-13rem] ml-[2rem] z-[1]">
      <Image
        {...{ src, alt }}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
        fill
        priority
      />
    </div>
  );
};

export default Avatar;
