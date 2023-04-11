import clsx from "clsx";
import { Status } from "@/models";
import { TaskContainer } from "@/components/common";

const headers = [
  { title: "# Task Name", styles: "flex-1 flex-1" },
  { title: "Task Tags", styles: "w-[180px]" },
  { title: "Estimate", styles: "w-[140px]" },
  { title: "Task Assign Name", styles: "w-[166px]" },
  { title: "Due Date", styles: "w-[140px]" },
];
const statusList: Status[] = [
  Status.BACKLOG,
  Status.CANCELLED,
  Status.DONE,
  Status.IN_PROGRESS,
  Status.TODO,
];

function TableView() {
  return (
    <div className="absolute w-full h-full space-y-4 overflow-auto pb-8">
      <div className="flex items-stretch border border-neutral-3 bg-neutral-4 rounded divide-x divide-neutral-3 text-neutral-1">
        {headers?.map((header, headerIdx) => (
          <div
            className={clsx(
              header.styles,
              "flex-shrink-0 inline-flex items-center relative p-4"
            )}
            key={`header-${headerIdx}`}
          >
            <span className="inline-flex">{header.title}</span>
          </div>
        ))}
      </div>
      {statusList?.map((status) => (
        <TaskContainer key={`${status}_COLUMN`} status={status} />
      ))}
    </div>
  );
}

export default TableView;
