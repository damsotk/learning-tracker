import UserList from "./(components)/main-page/UserList/UserList";
import { getUsersWithProgress } from "@/lib/users";
import HomeIntro from "@/app/(components)/main-page/HomeIntro/HomeIntro";

export default async function Home() {
  const users = await getUsersWithProgress();

  return (
    <>
      <HomeIntro />
      <UserList users={users} />
    </>
  );
}
