import { useState } from "react";
import { Status, Task } from "@/models";
import { TaskContainer } from "@/components/common";
import { useUpdateTask } from "@/hooks";

const statusList: Status[] = [
  Status.BACKLOG,
  Status.IN_PROGRESS,
  Status.DONE,
  Status.TODO,
  Status.CANCELLED,
];

function GridView() {
  // States
  const [dragged, setDragged] = useState<Task | undefined | null>(null);

  // Update mutation
  const [updateTask, { loading, error }] = useUpdateTask(
    dragged?.status || null
  );

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    try {
      e.preventDefault();
      const draggedList = e?.currentTarget?.dataset.list;

      if (dragged?.status === draggedList) return;

      const taskUpdated = {
        id: dragged?.id,
        name: dragged?.name,
        assigneeId: dragged?.assignee?.id,
        dueDate: dragged?.dueDate,
        pointEstimate: dragged?.pointEstimate,
        status: Status[draggedList as keyof typeof Status],
        tags: dragged?.tags,
        position: dragged?.position,
      };
      await updateTask({ variables: { input: { ...taskUpdated } } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute whitespace-nowrap space-x-8 h-full">
      {statusList?.map((status) => (
        <TaskContainer
          key={`${status}_COLUMN`}
          status={status}
          handleDrop={handleDrop}
          dragged={dragged}
          setDragged={setDragged}
        />
      ))}
    </div>
  );
}

export default GridView;
