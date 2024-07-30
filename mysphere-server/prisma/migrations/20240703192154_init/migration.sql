-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT,
    "profile_picture_url" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Post" (
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image_url" TEXT NOT NULL,
    "caption" TEXT,
    "likes_count" INTEGER NOT NULL DEFAULT 0,
    "comments_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "Like" (
    "like_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("like_id")
);

-- CreateTable
CREATE TABLE "Follower" (
    "follower_user_id" TEXT NOT NULL,
    "following_user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("follower_user_id","following_user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_follower_user_id_fkey" FOREIGN KEY ("follower_user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_following_user_id_fkey" FOREIGN KEY ("following_user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
