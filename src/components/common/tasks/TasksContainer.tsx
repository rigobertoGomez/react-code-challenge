import { useTasks } from "@/hooks";
import { Status } from "@/models";
import { useTasksContext } from "@/context";
import { TaskColumn, TaskTable } from "@/components/common";
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
        status={status}
        tasks={tasks}
        loading={loading}
      />
    );
  }
  return <TaskTable status={status} tasks={tasks} loading={loading} />;
}

export default TasksContainer;
