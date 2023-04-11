import { useTasks } from "@/hooks";
import { Status, Task } from "@/models";
import { useTasksContext } from "@/context";
import {
  TaskColumn,
  TaskTable,
  TaskCard,
  TaskCardSkeleton,
  TasksEmptyState
} from "@/components/common";

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

  console.log(error);
  if (view === "GRID") {
    return (
      <TaskColumn
        key={`${status}_COLUMN`}
        total={tasks?.length}
        status={status}
        dragged={dragged}
        error={error}
        handleDrop={handleDrop}
      >
        {loading ? (
          Array(3)
            .fill("")
            .map((_, index) => (
              <TaskCardSkeleton key={`${status}_LOADER_${index}`} />
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
              <li className="h-full flex flex-col items-center justify-center py-8 rounded-lg bg-neutral-4/20">
                <TasksEmptyState />
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
