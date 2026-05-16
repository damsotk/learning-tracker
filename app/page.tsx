"use client";
import { testusers } from "@/constants/usersTEST";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState(testusers);
  return (
    <div className={styles.page}>
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
}
