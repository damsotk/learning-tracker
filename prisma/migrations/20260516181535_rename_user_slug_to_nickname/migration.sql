
ALTER TABLE "users" RENAME COLUMN "slug" TO "nickname";

ALTER INDEX "users_slug_key" RENAME TO "users_nickname_key";