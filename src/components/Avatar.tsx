import Image from "next/image";
import styled from "styled-components";

const Avatar: React.FC<IAvatarProp> = ({ type, src, alt }) => {
  let avatar: React.ReactElement;

  const communityCover = (
    <SCommunityCoverAvatar>
      <Image
        src={src}
        style={{ objectFit: "cover", zIndex: 0 }}
        fill
        priority
        alt={alt}
      />
    </SCommunityCoverAvatar>
  );

  const communityCards = (
    <SCommunityCardsAvatar>
      <Image
        src={src}
        style={{ objectFit: "cover", zIndex: 0 }}
        fill
        priority
        alt={alt}
      />
    </SCommunityCardsAvatar>
  );

  const projectIntro = (
    <SProjectIntroAvatar>
      <Image
        src={src}
        style={{ objectFit: "cover", zIndex: 0 }}
        fill
        priority
        alt={alt}
      />
    </SProjectIntroAvatar>
  );

  switch (type) {
    case "communityCover":
      avatar = communityCover;
      break;

    case "communityCards":
      avatar = communityCards;
      break;

    case "projectIntro":
      avatar = projectIntro;
      break;

    default:
      avatar = <></>;
      break;
  }

  return avatar;
};

export default Avatar;

const SAvatar = styled.div`
  position: relative;
  z-index: 1;
  background: black;
  border-radius: 50%;
  margin: 1rem;
  overflow: hidden;
`;

const SCommunityCoverAvatar = styled(SAvatar)`
  width: 10rem;
  min-width: 10rem;
  height: 10rem;
`;

const SCommunityCardsAvatar = styled(SAvatar)`
  width: 7rem;
  height: 7rem;
  margin: 2rem;
  margin-right: 1rem;
`;

const SProjectIntroAvatar = styled(SAvatar)`
  min-width: 4rem;
  height: 4rem;
  margin: 0;
  margin-right: 10px;
  /* margin: 2rem; */
`;
