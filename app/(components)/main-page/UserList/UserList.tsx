import styles from "./user-list.module.css";
import { UserListItem } from "@/types/user";
import ProgressCircle from "../../reusable/ProgressCircle/ProgressCircle";
import { formateDate } from "@/utils/formatDate";
import Link from "next/link";

interface UserListProps {
  users: UserListItem[];
}

export default function UserList({ users }: UserListProps) {
  if (!users.length) {
    return (
      <section className={styles.wrapper}>
        <div className={styles.emptyState}>
          <h2 className={styles.emptyTitle}>No users yet</h2>
          <p className={styles.emptyText}>
            When users appear, they will be shown here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>Dashboard</p>
          <h1 className={styles.title}>Users</h1>
        </div>
        <div className={styles.counter}>{users.length}</div>
      </header>
      <div className={styles.list}>
        {users.map((user) => (
          <Link href={`/u/${user.nickname}`} key={user.id}>
            <article className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.avatar}>
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div className={styles.userInfo}>
                  <h2 className={styles.userName}>{user.name}</h2>
                  <p className={styles.userMeta}>
                    Last Update: {formateDate(user.updatedAt)}
                  </p>
                </div>
              </div>

              <div className={styles.progress}>
                <ProgressCircle
                  topic="JavaScript"
                  learnedSubtopicsCount={user.progress.javascript.learned}
                  totalSubtopicsCount={user.progress.javascript.total}
                />
                <ProgressCircle
                  topic="React"
                  learnedSubtopicsCount={user.progress.react.learned}
                  totalSubtopicsCount={user.progress.react.total}
                />
                <ProgressCircle
                  topic="Browser & Web"
                  learnedSubtopicsCount={user.progress.browser.learned}
                  totalSubtopicsCount={user.progress.browser.total}
                />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
