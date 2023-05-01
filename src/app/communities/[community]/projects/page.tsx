import Avatar from "@/components/Avatar";
import CardL from "@/components/CardL";
import Cover from "@/components/Cover";
import Nav from "@/components/Nav";

const page = () => {
  const communities = {
    id: "com-001",
    name: "Dreampiper",
    description: "A design platform for teams who build products together",
    avatarUrl: "dp.png",
    bannerImageUrl: "banner.png",
    featuredVideoUrl: "https://example.com/featured-video1.mp4",
    featuredCoverImage: "video.png",
    publicKey: "abc123",
    activeProjects: [
      {
        id: "proj-001",
        title: "Active Project 1",
        description: "A description of Active Project 1",
        featuredVideoUrl: "https://example.com/active-project1.mp4",
        featuredCoverImage: "https://example.com/active-project1-cover.jpg",
        publicKey: "abc123",
        figmaFramesURL: [
          "https://example.com/figma-frame1",
          "https://example.com/figma-frame2",
        ],
        updatedAt: 1645008000, // Unix timestamp for May 17th, 2022
        createdAt: 1643059200, // Unix timestamp for January 24th, 2022
      },
      {
        id: "proj-002",
        title: "Active Project 2",
        description: "A description of Active Project 2",
        featuredVideoUrl: "https://example.com/active-project2.mp4",
        featuredCoverImage: "https://example.com/active-project2-cover.jpg",
        publicKey: "abc123",
        figmaFramesURL: [
          "https://example.com/figma-frame3",
          "https://example.com/figma-frame4",
        ],
        updatedAt: 1645008000, // Unix timestamp for May 17th, 2022
        createdAt: 1643059200, // Unix timestamp for January 24th, 2022
      },
    ],
    updatedAt: 1645008000, // Unix timestamp for May 17th,
  };

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
            {communities.activeProjects.map((project, i) => (
              <CardL key={i} title={project.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
