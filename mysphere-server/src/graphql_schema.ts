import gql from "graphql-tag";

export const typeDefs = gql`
type Query {
    getProfile(username: String!): User
    getPosts(user_id: ID!): [Post!]
    getPost(post_id:ID!): Post
    getCommnets(post_id:ID!): [Comment!]
    getLikes(post_id:ID!): [Like!]
    getFollowers(user_id:ID!): [Follower!]
    getFollowing(user_id:ID!): [Follower!]
}
type Mutation {
    login(username: String!, password: String!): AuthPayload!
    signup(email:String!, password: String!, full_name: String!): AuthPayload! #currently it is sending the AuthPayload. Signup should first send an email verification
    updateProfile(full_name:String, bio:String, profile_picture_url:String):User!
    createPost(image_url: String!, caption: String): Post!
    comment(post_id: ID!,text: String!): Comment!
    like(post_id: ID!): Like!
    follow(following_id:ID!): Follower!
    unfollow(following_id:ID!):Follower!
}
type AuthPayload {
    token: String!
    user: AuthUser!
}
type AuthUser{
    username: String!
    user_id: ID!
}

type User {
  user_id: ID!
  username: String!
  full_name: String!
  bio: String
  profile_picture_url: String
  posts: [Post!]
  posts_count: Int!
  followers_count: Int!
  following_count: Int!
  followers: [Follower!]
  following: [Follower!]
}
type Follower {
  follower_user_id: ID!
  following_user_id: ID!
  createdAt: String!
  updatedAt: String!
}   
type Post {
  post_id: ID!
  user_id: ID!
  createdAt: String!
  image_url: String!
  caption: String 
  likes: [Like!]
  likes_count: Int!
  comments: [Comment!]
  comments_count: Int!
}
type Comment {
  comment_id: ID!
  user_id: ID!
  post_id: ID!
  createdAt: String!
  upadatedAt: String!
  text: String!
}
type Like {
  like_id: ID!
  user_id: ID!
  post_id: ID!
  createdAt: String!
}
`;