import React from "react";
import clsx from "clsx";
import { Status } from "@/models";
import { TasksContainer } from "@/components/common";

const statusList: Status[] = [
  Status.BACKLOG,
  Status.CANCELLED,
  Status.DONE,
  Status.IN_PROGRESS,
  Status.TODO,
];

function GridView() {
  return (
    <div className="absolute whitespace-nowrap space-x-8 h-full">
      {statusList?.map((status) => (
        <TasksContainer key={`${status}_COLUMN`} status={status} />
      ))}
    </div>
  );
}

export default GridView;
