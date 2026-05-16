"use client";

import { testusers } from "@/constants/usersTEST";
import { useState } from "react";
import UserList from "./(components)/main-page/UserList/UserList";

export default function Home() {
  const [users, setUsers] = useState(testusers);

  return <UserList users={users} />;
}
