import prisma from "../db/prismaClient";


export const createPostResolver = async (_any: any, { image_url, caption }: { image_url: string, caption?: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    try {
        const user_id = context.user.user_id;
        const post = await prisma.post.create({
            data: {
                user_id: user_id,
                image_url: image_url,
                caption: caption
            }
        })
        return post;
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

export const postsResolver = async (_: any, { user_id }: { user_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const posts = await prisma.post.findMany({
        where: {
            user_id: user_id
        }
    });
    return posts;
}

export const signlePostResolver = async (_: any, { post_id }: { post_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const post = await prisma.post.findFirst({
        where: {
            post_id: post_id
        },
        include: {
            user: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }
    })
    return post
}
//todo: add pagination
//this gives all the comments of a post
export const commentsResolver = async (_: any, { post_id, }: { post_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const comments = await prisma.comment.findMany({
        where: {
            post_id: post_id
        },
        include: {
            user: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }
    })
    return comments;
}
//todo: add pagination
//this gives all the likes of a post
export const likesResolver = async (_: any, { post_id }: { post_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const likes = await prisma.like.findMany({
        where: {
            post_id: post_id
        }, include: {
            user: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }
    })
    return likes;
}

//this creates a new commment on a post
export const createCommentResolver = async (_: any, { post_id, text }: { post_id: string, text: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const user_id = context.user.user_id;
    const comment = await prisma.comment.create({
        data: {
            user_id: user_id,
            post_id: post_id,
            text: text
        }, include: {
            user: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }
    })
    console.log(comment);
    return comment;
}

//this likes a post
export const likePostResolver = async (_: any, { post_id }: { post_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const user_id = context.user.user_id;
    const like = await prisma.like.upsert({
        where: {
            like_id: {
                user_id: user_id,
                post_id: post_id
            }
        },
        update: {
            isActive: false
        },
        create: {
            user_id: user_id,
            post_id: post_id,
        }
    })
    return like;
}

