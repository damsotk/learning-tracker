import { UserPublic } from "@/types/user";
import styles from "./info-about-user.module.css";

type InfoAboutUserProps = Pick<UserPublic, "nickname" | "name">;

export default function InfoAboutUser({ nickname, name }: InfoAboutUserProps) {
  const initial = nickname?.[0] ?? "?";
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>{initial}</div>
      <div className={styles.info}>
        <span className={styles.label}>Profile</span>
        <span className={styles.nickname}>{nickname}</span>
        {name && <span className={styles.name}>{name}</span>}
      </div>
    </div>
  );
}
