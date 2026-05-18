import { Topic } from "@prisma/client";

type ProgressDashboardProps = Pick<Topic, "name"> & {
  learnedSubtopicsCount: number;
  totalSobtopicsCount: number;
};

export default function ProgressDashboard() {
  return <div></div>;
}
