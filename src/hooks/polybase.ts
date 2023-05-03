import generateQuickGuid from "@/utils/generateQuickGuid";
import { Auth } from "@polybase/auth";
import { Polybase } from "@polybase/client";
import { useCallback, useMemo, useState } from "react";

const db = new Polybase({
  defaultNamespace:
    "pk/0xc0ccc35ddd223f3f873dcb7fb1cec7d511e361ac611fb407fbcd2b854bf99143193fc42715a91c18c65849f5eb99dfe0faa3b77870ae954e8bb7ae36c4585988/Quiverbliss",
});

const auth = typeof window !== "undefined" ? new Auth() : null;

const userReference = db.collection("User");
const communityReference = db.collection("Community");
const projectReference = db.collection("Project");
const artboardReference = db.collection("Artboard");
const communitiesObjReference = db.collection("Communities");

export const usePolybase = () => {
  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState<any>();

  const [communitiesObjId, setCommunitiesObjId] = useState("");
  const [getCommunitiesId, setCommunities] = useState<string[] | null>(null);
  const [communityId, setActiveCommunityId] = useState<string | null>(null);
  const [projectId, setActiveProjectId] = useState<string | null>(null);

  const [getCommunity, setCommunityData] = useState<any>();
  const [getProject, setProjectData] = useState<any>();

  useMemo(() => {
    auth?.onAuthUpdate((authState) => {
      if (authState) {
        setLogin(true);
        setUser(authState.userId);
      } else {
        setLogin(false);
      }
    });
  }, [auth]);

  const signIn = async () => {
    if (!auth) return;
    const res = await auth.signIn({ force: true });
    db.signer(async (data) => {
      console.log(data);
      return {
        h: "eth-personal-sign",
        sig: await auth.ethPersonalSign(data),
      };
    });

    if (!res?.userId) return auth.signOut();

    await userReference.create([
      res?.userId, // id
      "", // name
      res?.email || "", // email
      "", // avatarUrl
      Date.now(), // createdAt
    ]);

    setUser(res?.userId);
  };

  const signOut = async () => {
    if (!auth) return;
    await auth.signOut();
  };

  /* USER */

  const getUserRecord = useCallback(async () => {
    return userReference.record(user).get();
  }, []);

  /* COMMUNITY */

  const createCommunity = useCallback(
    async ({
      name,
      description,
      avatarUrl,
      bannerImageUrl,
      featuredVideoUrl,
      featuredCoverImage,
    }: {
      name: string;
      description: string;
      avatarUrl: string;
      bannerImageUrl: string;
      featuredVideoUrl: string;
      featuredCoverImage: string;
    }) => {
      const randomId = generateQuickGuid() + "-" + Date.now();
      communityReference
        .create([
          randomId, // id
          name, // name
          description, // description
          avatarUrl, // avatarUrl
          bannerImageUrl, // bannerImageUrl
          featuredVideoUrl, // featuredVideoUrl
          featuredCoverImage, // featuredCoverImage
          Date.now(), // createdAt
        ])
        .then(() => {
          userReference
            .record(user)
            .call("setCommunityId", [randomId, Date.now()]);
          communitiesObjReference
            .record(communitiesObjId)
            .call("setCommunityId", [randomId, Date.now()]);
        });
    },
    []
  );

  // getCommunity
  useMemo(async () => {
    if (!communityId) return;
    communityReference.record(communityId).onSnapshot(
      (newDoc) => {
        setCommunityData(newDoc);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [communityId]);

  const getCommunities = useCallback(async (communitiesId: string[]) => {
    const data = communitiesId.map(
      async (id) => await communityReference.record(id).get()
    );
    return await Promise.all(data);
  }, []);

  // updateCommunity
  // deleteCommunity

  /* PROJECTS */

  const createProject = useCallback(
    async ({
      title,
      description,
      featuredVideoUrl,
      featuredCoverImage,
      figmaFramesURL,

      communityId,
    }: {
      title: string;
      description: string;
      featuredVideoUrl: string;
      featuredCoverImage: string;
      figmaFramesURL: string[];

      communityId: string;
    }) => {
      const randomId = generateQuickGuid() + "-" + Date.now();
      projectReference
        .create([
          randomId, // id
          title, // title
          description, // description
          featuredVideoUrl, // featuredVideoUrl
          featuredCoverImage, // featuredCoverImage
          figmaFramesURL, // figmaFramesURL
          Date.now(), // createdAt
        ])
        .then(() => {
          communityReference
            .record(communityId)
            .call("setProjectId", [randomId, Date.now()]);
        });
    },
    []
  );

  // getProject
  useMemo(async () => {
    if (!projectId) return;
    projectReference.record(projectId).onSnapshot(
      (newDoc) => {
        setProjectData(newDoc);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [projectId]);

  const getProjects = useCallback(async (projectsId: string[]) => {
    const data = projectsId.map(
      async (id) => await projectReference.record(id).get()
    );
    return await Promise.all(data);
  }, []);

  // updateProject
  // deleteProject

  /* ARTBOARD */

  const createArtboard = useCallback(
    async ({ title, projectId }: { title: string; projectId: string }) => {
      const randomId = generateQuickGuid() + "-" + Date.now();
      artboardReference
        .create([
          randomId, // id
          title, // title
          Date.now(), // createdAt
        ])
        .then(() => {
          projectReference
            .record(projectId)
            .call("setArtboardId", [randomId, Date.now()]);
        });
    },
    []
  );

  const getArtboards = useCallback(async (artBoards: string[]) => {
    const data = artBoards.map(
      async (id) => await artboardReference.record(id).get()
    );
    return await Promise.all(data);
  }, []);

  const updateArtboard = useCallback(
    async ({
      artboardId,
      title,
      figmaFramesURL,
    }: {
      artboardId: string;
      title: string;
      figmaFramesURL: string[];
    }) => {
      artboardReference
        .record(artboardId)
        .call("updateArtboard", [title, figmaFramesURL, Date.now()]);
    },
    []
  );

  const setArtboardLiveData = useCallback(
    async ({
      artboardId,
      audioUrl,
      mouseMoveUrl,
    }: {
      artboardId: string;
      audioUrl: string;
      mouseMoveUrl: string;
    }) => {
      artboardReference
        .record(artboardId)
        .call("setLiveData", [audioUrl, mouseMoveUrl, Date.now()]);
    },
    []
  );

  /* COMMUNITIES */

  const createCommunitiesObject = useCallback(
    async ({
      id,
      name,
      description,
    }: {
      id: string;
      name: string;
      description: string;
    }) => {
      communitiesObjReference.create([
        id, // id
        name, // name
        description, // description
        Date.now(), // createdAt
      ]);
    },
    []
  );

  // getCommunitiesId
  useMemo(async () => {
    communitiesObjReference.record(communitiesObjId).onSnapshot(
      (newDoc) => {
        const { communitiesId } = newDoc as any;
        setCommunities(communitiesId);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // updateCommunities
  // deleteCommunities

  return {
    signIn,
    signOut,
    loggedIn,

    getUserRecord,

    createCommunity,
    getCommunity,
    getCommunities,
    // updateCommunity,
    // deleteCommunity,

    createProject,
    getProject,
    getProjects,
    // updateProject,
    // deleteProject,

    createArtboard,
    getArtboards,
    updateArtboard,
    setArtboardLiveData,
    // deleteArtboard,

    createCommunitiesObject,
    getCommunitiesId,
    // updateCommunities
    // deleteCommunities
  };
};
