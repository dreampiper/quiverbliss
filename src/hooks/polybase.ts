import { store } from "@/store/store";
import generateQuickGuid from "@/utils/generateQuickGuid";
import { Auth } from "@polybase/auth";
import { Polybase } from "@polybase/client";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface Community {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  bannerImageUrl: string;
  featuredVideoUrl: string;
  featuredCoverImage: string;
  projectsId: string[];
  updatedAt: number;
  createdAt: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  featuredVideoUrl: string;
  featuredCoverImage: string;
  active: boolean;
  figmaFramesURL: string[];
  artboardsId: string[];
  updatedAt: number;
  createdAt: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  communitiesId: string[];
  createdAt: number;
  updatedAt: number;
}

export interface Artboard {
  id: string;
  title: string;
  audioUrl?: string;
  mouseMoveUrl?: string;
  figmaFramesURL: string[];
  updatedAt: number;
  createdAt: number;
}

const db = new Polybase({
  defaultNamespace:
    "pk/0xc0ccc35ddd223f3f873dcb7fb1cec7d511e361ac611fb407fbcd2b854bf99143193fc42715a91c18c65849f5eb99dfe0faa3b77870ae954e8bb7ae36c4585988/Quiverbliss",
});

const userReference = db.collection("User");
const communityReference = db.collection("Community");
const projectReference = db.collection("Project");
const artboardReference = db.collection("Artboard");
const communitiesObjReference = db.collection("Communities");

export const usePolybase = () => {
  const [loggedIn, setLogin] = useState(false);
  const userId = store((state) => state.userId);
  const setUserId = store((state) => state.setUserId);

  const [auth, setAuth] = useState<any>();

  const [communitiesObjId, setCommunitiesObjId] = useState("quiver_test_0");
  const [getCommunitiesId, setCommunities] = useState<string[] | null>(null);
  const [communityId, setActiveCommunityId] = useState<string | null>(null);
  const [projectId, setActiveProjectId] = useState<string | null>(null);

  const [getCommunity, setCommunityData] = useState<Community | null>(null);
  const [getProject, setProjectData] = useState<Project | null>(null);
  useEffect(() => {
    setAuth(new Auth());
  }, []);

  useMemo(() => {
    auth?.onAuthUpdate((authState: { userId: any }) => {
      if (authState) {
        setLogin(true);
        setUserId(authState.userId);
      } else {
        setLogin(false);
        setUserId(null);
      }
    });
  }, [auth]);

  db.signer(async (data) => {
    console.log(data);
    return {
      h: "eth-personal-sign",
      sig: await auth.ethPersonalSign(data),
    };
  });

  const authenticate = async () => {
    if (!auth) return;
    console.log(auth);
    const res = await auth.signIn({ force: true });

    if (!res?.userId) {
      auth.signOut();
    } else {
      await userReference.create([
        res?.userId, // id
        "", // name
        res?.email || "", // email
        "", // avatarUrl
        Date.now(), // createdAt
      ]);
      setUserId(res?.userId);
    }
  };

  /* USER */

  const getUserRecord = useCallback(async (userId: string) => {
    return (await userReference.record(userId).get()).data as User;
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
      if (!userId) return;
      const randomId = generateQuickGuid() + "-" + Date.now();
      await communityReference
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
            .record(userId)
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
        setCommunityData(newDoc.data as Community);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [communityId]);

  const getCommunities = useCallback(async (communitiesId: string[]) => {
    const data = communitiesId.map(
      async (id) =>
        (await communityReference.record(id).get()).data as Community
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
        setProjectData(newDoc.data as Project);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [projectId]);

  const getProjects = useCallback(async (projectsId: string[]) => {
    const data = projectsId.map(
      async (id) => (await projectReference.record(id).get()).data as Project
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
      async (id) => (await artboardReference.record(id).get()).data as Artboard
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
      const c = await communitiesObjReference.create([
        id, // id
        name, // name
        description, // description
        Date.now(), // createdAt
      ]);

      console.log("why");

      console.log(c);
    },
    []
  );

  // getCommunitiesId
  useMemo(async () => {
    communitiesObjReference.record(communitiesObjId).onSnapshot(
      (newDoc) => {
        const { communitiesId } = newDoc.data as any;
        setCommunities(communitiesId);
        console.log(newDoc);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // updateCommunities
  // deleteCommunities

  return {
    auth: authenticate,
    loggedIn,

    getUserRecord,

    createCommunity,
    getCommunity,
    getCommunities,
    // updateCommunity,
    // deleteCommunity,
    setActiveCommunityId,
    setActiveProjectId,

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
