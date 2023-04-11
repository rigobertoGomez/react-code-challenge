import React from "react";
import { TaskCard } from "@/components/common";
import { useTasks } from "@/hooks/useTasks";
import { Status, Task, PointEstimate } from "@/models";
interface TasksColumnProps {
  status: Status;
  tasks: Task[];
  loading: boolean;
}

function TasksColumn({ status, tasks, loading }: TasksColumnProps) {
  // const { loading, error, data } = useTasks({ status });
  // const tasks = data?.tasks || [];

  return (
    <div className="w-[348px] h-full inline-block flex-shrink-0">
      <div className="flex flex-col max-h-full h-full space-y-4">
        <div className="text-white flex-shrink-0 h-8 text-lg">
          <span className="capitalize">{status?.replaceAll("_", " ")}</span>
          <span className="ml-1">({tasks?.length || 0})</span>
        </div>
        <ul className="flex-1 flex-grow-1 flex overflow-y-auto flex-col w-full space-y-4 pb-4 h-full">
          {loading ? (
            Array(3)
              .fill("")
              .map((_, index) => (
                <li key={`${status}_LOADER_${index}`}>
                  <article className="w-[348px] h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-neutral-5/60 h-6 w-56 rounded animate-pulse block"></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="bg-neutral-5/60 h-4 w-32 rounded animate-pulse block"></span>
                      <span className="bg-neutral-5/60 h-8 w-20 rounded animate-pulse block"></span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="bg-neutral-5/60 h-8 w-24 rounded animate-pulse block"></span>
                      <span className="bg-neutral-5/60 h-8 w-24 rounded animate-pulse block"></span>
                    </div>
                    <span className="bg-neutral-5/60 h-8 w-8 rounded-full animate-pulse block"></span>
                  </article>
                </li>
              ))
          ) : (
            <>
              {tasks.length > 0 ? (
                <>
                  {tasks?.map((task: Task) => (
                    <li key={task?.id} className="flex-shrink-0">
                      <TaskCard task={task} />
                    </li>
                  ))}
                </>
              ) : (
                <li className="h-full flex flex-col items-center justify-center">
                  <p className="text-neutral-3 font-bold">Results Not Found</p>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TasksColumn;
