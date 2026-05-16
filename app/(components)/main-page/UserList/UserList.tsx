import styles from "./user-list.module.css";
import { UserListItem } from "@/types/user";
import ProgressCircle from "../../reusable/ProgressCircle/ProgressCircle";
import { formateDate } from "@/utils/formatDate";

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
          <article className={styles.card} key={user.id}>
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
                learned={user.progress.javascript.learned}
                total={user.progress.javascript.total}
              />
              <ProgressCircle
                topic="React"
                learned={user.progress.react.learned}
                total={user.progress.react.total}
              />
              <ProgressCircle
                topic="Browser & Web"
                learned={user.progress.browser.learned}
                total={user.progress.browser.total}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
