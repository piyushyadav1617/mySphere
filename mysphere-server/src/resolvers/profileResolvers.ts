import prisma from "../db/prismaClient";


export const profileResolver = async (_: any, { username }: { username: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");

    const profile = await prisma.user.findUnique({
        where: { username },
        select: {
            user_id: true,
            username: true,
            bio: true,
            full_name: true,
            profile_picture_url: true,
            posts: true,
            posts_count: true,
            followers_count: true,
            following_count: true,
        },
    });


    if (!profile) {
        throw new Error('User not found');
    }
    return profile;
}

export const updateProfileResovler = async (_: any, { full_name, bio, profile_picture_url }: {full_name?: string, bio?: string, profile_picture_url?: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const user_id = context.user.user_id;
    const profile = await prisma.user.update({
        where: {
            user_id: user_id,
        },
        data: {
            full_name: full_name,
            bio: bio,
            profile_picture_url: profile_picture_url
        },
    })
    return profile;
}


export const followerResolver = async (_: any, { user_id }: { user_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");

    const followers = await prisma.follower.findMany({
        where: {
            following_user_id: user_id
        },
        include: {
            follower: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }

    })

    return followers;
}

export const followingResolver = async (_: any, { user_id }: { user_id: string }, context: any) => {

    if (!context) throw new Error("Unauthorized");

    const followings = await prisma.follower.findMany({
        where: {
            follower_user_id: user_id
        },
        include: {
            following: {
                select: {
                    username: true,
                    profile_picture_url: true
                }
            }
        }
    })

    return followings;
}