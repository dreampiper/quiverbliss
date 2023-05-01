import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <div className=" flex flex-col gap-16">
        <div className=" ">
          <Cover src={"/banner.png" || ""} />
          <Avatar src={"/banner-logo.png" || ""} />
        </div>
        <Nav />
      </div>
      <div className=" px-10 mt-16">
        <div className=" flex flex-col gap-6">
          <input
            type="text"
            className=" h-12 px-6 focus:outline-none rounded-lg border-[#F0F1F8] border"
            placeholder="Search..."
          />

          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
            <CardL />
            <CardL />
            <CardL />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
