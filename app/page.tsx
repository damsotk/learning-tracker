import UserList from "./(components)/main-page/UserList/UserList";
import { getUsersWithProgress } from "@/lib/users";

export default async function Home() {
  const users = await getUsersWithProgress();

  return <UserList users={users} />;
}
