import React, { ReactNode } from "react";
import { TaskCard } from "@/components/common";
import { useTasks } from "@/hooks/useTasks";
import { Status, Task, PointEstimate } from "@/models";
interface TasksColumnProps {
  status: Status;
  total: number;
  children: ReactNode;
}

function TasksColumn({ status, children, total }: TasksColumnProps) {
  return (
    <div className="w-[348px] h-full inline-block flex-shrink-0">
      <div className="flex flex-col max-h-full h-full space-y-4">
        <div className="text-white flex-shrink-0 h-8 text-lg">
          <span className="capitalize">{status?.replaceAll("_", " ")}</span>
          <span className="ml-1">({total})</span>
        </div>
        <ul className="flex-1 flex-grow-1 flex overflow-y-auto flex-col w-full space-y-4 pb-4 h-full">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default TasksColumn;
