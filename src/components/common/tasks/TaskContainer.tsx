import { useTasks } from "@/hooks";
import { Status, Task } from "@/models";
import { useTasksContext } from "@/context";
import { TaskColumn, TaskTable, TaskCard } from "@/components/common";

interface TaskContainerProps {
  status: Status;
  dragged?: Task | null | undefined;
  setDragged?: React.Dispatch<Task>;
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function TasksContainer({
  status,
  dragged,
  handleDrop,
  setDragged,
}: TaskContainerProps) {
  const { loading, error, data } = useTasks({ status });
  const tasks = data?.tasks || [];
  const { view }: any = useTasksContext();

  if (view === "GRID") {
    return (
      <TaskColumn
        key={`${status}_COLUMN`}
        total={tasks?.length}
        status={status}
        dragged={dragged}
        handleDrop={handleDrop}
      >
        {loading ? (
          Array(3)
            .fill("")
            .map((_, index) => (
              <article
                key={`${status}_LOADER_${index}`}
                className="w-[348px] h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4"
              >
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
            ))
        ) : (
          <>
            {tasks.length > 0 ? (
              <>
                {tasks?.map((task: Task) => (
                  <TaskCard
                    task={task}
                    key={task?.id}
                    setDragged={setDragged}
                  />
                ))}
              </>
            ) : (
              <li className="h-full flex flex-col">
                <div className="inline-flex justify-center w-full py-12 bg-neutral-4/50 rounded-lg">
                  <p className="text-neutral-3 font-bold">Results Not Found</p>
                </div>
              </li>
            )}
          </>
        )}
      </TaskColumn>
    );
  }
  return <TaskTable status={status} tasks={tasks} loading={loading} />;
}

export default TasksContainer;
