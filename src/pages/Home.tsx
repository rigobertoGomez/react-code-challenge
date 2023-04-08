import { TaskColumn } from "@/components/common";
import { Status } from "@/models";

const statusList: Status[] = [
  Status.BACKLOG,
  Status.CANCELLED,
  Status.DONE,
  Status.IN_PROGRESS,
  Status.TODO
]

export default function Home() {
  return (
    <div className="space-y-4 flex flex-grow overflow-x-auto overflow-y-hidden h-full relative">
      <div className="absolute whitespace-nowrap space-x-8 h-full">
        {statusList?.map((status) => (
          <TaskColumn key={`${status}_COLUMN`} status={status} />
        ))}
      </div>
    </div>
  );
}
