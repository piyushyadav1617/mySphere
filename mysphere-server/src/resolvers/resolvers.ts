import { loginResolver, signupResolver } from "./authResolvers";
import { followResolver, unfollowResovler } from "./followResolver";
import {
    commentsResolver,
    createCommentResolver,
    createPostResolver,
    likePostResolver,
    likesResolver,
    postsResolver,
    signlePostResolver
} from "./postResolver";
import {
    followingResolver,
    followerResolver,
    profileResolver,
    updateProfileResovler
} from "./profileResolvers";


export const resolvers = {
    Query: {
        getProfile: profileResolver,
        getFollowers: followerResolver,
        getFollowing: followingResolver,
        getPosts: postsResolver,
        getPost: signlePostResolver,
        getCommnets: commentsResolver,
        getLikes: likesResolver,
    },
    Mutation: {
        login: loginResolver,
        signup: signupResolver,
        updateProfile: updateProfileResovler,
        createPost: createPostResolver,
        comment: createCommentResolver,
        like: likePostResolver,
        follow: followResolver,
        unfollow: unfollowResovler
    },
};