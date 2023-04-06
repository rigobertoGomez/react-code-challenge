import React from "react";
import { TaskCard } from "@/components/common";

interface TasksColumnProps {
  title: string;
  tasks?: Array<any>;
}

function TasksColumn({ title, tasks }: TasksColumnProps) {
  return (
    <div className="w-[348px] h-full inline-block">
      <div className="flex flex-col max-h-full space-y-4">
        <div className="text-white flex-shrink-0 h-8 text-lg">
          <span className="capitalize">{title}</span>
          <span className="ml-1">(4)</span>
        </div>
        <ul className="flex-1 flex-grow-1 flex overflow-y-auto flex-col w-full space-y-4 pb-4">
          {(Array(8) as any).fill().map((task: any, index: number) => (
            <li key={index} className="flex-shrink-0">
              <TaskCard />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TasksColumn;
