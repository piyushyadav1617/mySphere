import prisma from "../db/prismaClient"

export const followResolver = async (_: any, { following_id }: { following_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const follower_id = context.user.user_id;
    const exist = await prisma.follower.findUnique({
        where: {
            follower_following: {
                follower_user_id: follower_id,
                following_user_id: following_id
            }
        }
    })

    if (exist) throw new Error("Already following");
    const follower = await prisma.follower.create({
        data: {
            follower_user_id: follower_id,
            following_user_id: following_id,
        }
    })
    return follower;
}


export const unfollowResovler = async (_: any, { following_id }: { following_id: string }, context: any) => {
    if (!context.user) throw new Error("Unauthorized");
    const follower_id = context.user.user_id;
    const follower = await prisma.follower.delete({
        where: {
            follower_following: {
                follower_user_id: follower_id,
                following_user_id: following_id
            }
        }
    })
    console.log(follower);
    return follower;


}