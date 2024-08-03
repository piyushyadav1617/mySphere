/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[follower_user_id]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[following_user_id]` on the table `Follower` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_user_id_key" ON "Comment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_post_id_key" ON "Comment"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_follower_user_id_key" ON "Follower"("follower_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Follower_following_user_id_key" ON "Follower"("following_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Like_user_id_key" ON "Like"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Like_post_id_key" ON "Like"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_user_id_key" ON "Post"("user_id");
