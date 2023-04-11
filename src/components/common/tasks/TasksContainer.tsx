import { useTasks } from "@/hooks";
import { Status, Task } from "@/models";
import { useTasksContext } from "@/context";
import { TaskColumn, TaskTable, TaskCard } from "@/components/common";
import TasksColumn from "./TaskColumn";

interface TasksColumnProps {
  status: Status;
}

function TasksContainer({ status }: TasksColumnProps) {
  const { loading, error, data } = useTasks({ status });
  const tasks = data?.tasks || [];

  const { view }: any = useTasksContext();

  if (view === "GRID") {
    return (
      <TasksColumn
        key={`${status}_COLUMN`}
        total={tasks?.length}
        status={status}
      >
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
      </TasksColumn>
    );
  }
  return <TaskTable status={status} tasks={tasks} loading={loading} />;
}

export default TasksContainer;
