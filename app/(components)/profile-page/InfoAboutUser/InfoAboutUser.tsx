import { UserListItem } from "@/types/user";

type InfoAboutUserProps = Pick<UserListItem, "nickname" | "name">;

export default function InfoAboutUser({ nickname, name }: InfoAboutUserProps) {
  return (
    <div>
      {nickname}, {name}
    </div>
  );
}
