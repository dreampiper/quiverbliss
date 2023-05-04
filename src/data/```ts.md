```ts
  @public
  collection User {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    publicKey: PublicKey;
    communitiesId: string[];
    createdAt: number;
    updatedAt: number;

    constructor (id: string, name: string, email: string, avatarUrl: string, createdAt: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.avatarUrl = avatarUrl;
      this.publicKey = ctx.publicKey;
      this.communitiesId = [];
      this.updatedAt = createdAt;
      this.createdAt = createdAt;
    }

    updateProfile (name: string, email: string, avatarUrl: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.name = name;
      this.email = email;
      this.avatarUrl = avatarUrl;
      this.updatedAt = updatedAt;
    }

    setCommunityId (id: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.communitiesId.push(id);
      this.updatedAt = updatedAt;
    }

    // removeCommunityId
  }

  @public
  collection Community {
    id: string;
    name: string;
    description: string;
    avatarUrl: string;
    bannerImageUrl: string;
    featuredVideoUrl: string;
    featuredCoverImage: string;
    publicKey: PublicKey;
    projectsId: string[];
    updatedAt: number;
    createdAt: number;

    constructor (id: string, name: string, description: string, avatarUrl: string, bannerImageUrl: string, featuredVideoUrl: string, featuredCoverImage: string, createdAt: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.avatarUrl = avatarUrl;
      this.bannerImageUrl = bannerImageUrl;
      this.featuredVideoUrl = featuredVideoUrl;
      this.featuredCoverImage = featuredCoverImage;
      this.publicKey = ctx.publicKey;
      this.projectsId= [];
      this.updatedAt = createdAt;
      this.createdAt = createdAt;
    }

    updateCommunity (name: string, description: string, avatarUrl: string, bannerImageUrl: string, featuredVideoUrl: string, featuredCoverImage: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.name = name;
      this.description = description;
      this.avatarUrl = avatarUrl;
      this.bannerImageUrl = bannerImageUrl;
      this.featuredVideoUrl = featuredVideoUrl;
      this.featuredCoverImage = featuredCoverImage;
      this.updatedAt = updatedAt;
    }

    setProjectId (id: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.projectsId.push(id);
      this.updatedAt = updatedAt;
    }

    // removeProjectId
  }

  @public
  collection Project {
    id: string;
    title: string;
    description: string;
    featuredVideoUrl: string;
    featuredCoverImage: string;
    active: boolean;
    publicKey: PublicKey;
    figmaFramesURL: string[];
    artboardsId: string[];
    updatedAt: number;
    createdAt: number;

    constructor (id: string, title: string, description: string, featuredVideoUrl: string, featuredCoverImage: string, figmaFramesURL: string[], createdAt: number) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.featuredVideoUrl = featuredVideoUrl;
      this.featuredCoverImage = featuredCoverImage;
      this.active = false;
      this.publicKey = ctx.publicKey;
      this.figmaFramesURL = figmaFramesURL;
      this.artboardsId = [];
      this.updatedAt = createdAt;
      this.createdAt = createdAt;
    }

    updateProject (title: string, description: string, featuredVideoUrl: string, featuredCoverImage: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.title = title;
      this.description = description;
      this.featuredVideoUrl = featuredVideoUrl;
      this.featuredCoverImage = featuredCoverImage;
      this.updatedAt = updatedAt;
    }

    setActive (active: boolean, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.active = active;
      this.updatedAt = updatedAt;
    }

    setArtboardId (id: string, updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.artboardsId.push(id);
      this.updatedAt = updatedAt;
    }
  }

  @public
  collection Artboard {
    id: string;
    title: string;
    audioUrl?: string;
    mouseMoveUrl?: string;
    figmaFramesURL: string[];
    publicKey: PublicKey;
    updatedAt: number;
    createdAt: number;

    constructor (id: string, title: string, createdAt: number) {
      this.id = id;
      this.title = title;
      this.figmaFramesURL = [];
      this.publicKey = ctx.publicKey;
      this.updatedAt = createdAt;
      this.createdAt = createdAt;
    }

    updateArtboard (title: string, figmaFramesURL: string[], updatedAt: number) {
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.title = title;
      this.figmaFramesURL = figmaFramesURL;
      this.updatedAt = updatedAt;
    }

    setLiveData (audioUrl: string, mouseMoveUrl: string, updatedAt: number){
      if (ctx.publicKey != this.publicKey) {
        error('You are not the creator of this record.');
      }
      this.audioUrl = audioUrl;
      this.mouseMoveUrl = mouseMoveUrl;
      this.updatedAt = updatedAt;
    }
  }

  @public
  collection Communities {
    id: string;
    name: string;
    description: string;
    communitiesId: string[];
    updatedAt: number;
    createdAt: number;

    constructor (id: string, name: string, description: string, createdAt: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.communitiesId = [];
      this.updatedAt = createdAt;
      this.createdAt = createdAt;
    }

    setCommunityId (id: string, updatedAt: number) {
      this.communitiesId.push(id);
      this.updatedAt = updatedAt;
    }
  }
```
