import { Dialog, Button } from "@/components/ui";
import { useMutation, gql } from "@apollo/client";
import { CREATE_TASK, GET_TASKS } from "@/services";
import { useEffect, useState } from "react";
import { useTasksContext } from "@/context/TasksContext";
import { useUpdateTask } from "@/hooks";
// Components
import {
  EstimateSelect,
  TagsSelect,
  StatusSelect,
  DueDateSelect,
} from "@/components/common";

function EditTaskDialog() {
  const {
    currentTask,
    setCurrentTask,
    openEditTaskDialog,
    setOpenEditTaskDialog,
  }: any = useTasksContext();

  const [updateTask, { loading, error }] = useUpdateTask();

  const [editTask, setEditTask] = useState<any>({
    id: "",
    name: "",
    assigneeId: "",
    dueDate: new Date(),
    pointEstimate: "",
    status: "",
    tags: [],
    position: 0,
  });

  useEffect(() => {
    if (currentTask?.id) {
      setEditTask({
        id: currentTask?.id,
        name: currentTask?.name,
        assigneeId: currentTask?.assignee?.id,
        dueDate: currentTask?.dueDate,
        pointEstimate: currentTask?.pointEstimate,
        status: currentTask?.status,
        tags: currentTask?.tags,
        position: currentTask?.position,
      });
    }
  }, [currentTask]);

  const onSubmit = async () => {
    try {
      await updateTask({ variables: { input: { ...editTask } } });
      setOpenEditTaskDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={openEditTaskDialog}
      close={() => setOpenEditTaskDialog(false)}
      maxWidth={572}
    >
      <div className="space-y-6">
        <div className="div">
          <input
            id="search-field"
            className="block h-full bg-transparent outline-none w-full border-0 py-2 text-neutral-1 placeholder:text-neutral-2 focus:ring-0 text-xl font-semibold"
            placeholder="Task title"
            autoComplete="off"
            name="search"
            value={editTask?.name}
            onChange={(e) =>
              setEditTask((editTask: any) => ({
                ...editTask,
                name: e?.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <EstimateSelect
            defaultValue={editTask?.pointEstimate}
            onChange={(value: string | undefined) =>
              setEditTask((editTask: any) => ({
                ...editTask,
                pointEstimate: value,
              }))
            }
          />
          <TagsSelect
            defaultValue={currentTask?.tags}
            onChange={(value: string[] | undefined) =>
              setEditTask((editTask: any) => ({
                ...editTask,
                tags: value,
              }))
            }
          />
          <StatusSelect
            defaultValue={currentTask?.status}
            onChange={(value: string | undefined) =>
              setEditTask((editTask: any) => ({
                ...editTask,
                status: value,
              }))
            }
          />
          <DueDateSelect
            defaultValue={currentTask?.dueDate}
            onChange={(value: string | undefined) =>
              setEditTask((editTask: any) => ({
                ...editTask,
                dueDate: value,
              }))
            }
          />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button
            title="Cancel"
            variant="secondary"
            disabled={loading}
            onClick={() => {
              setOpenEditTaskDialog(false);
              setCurrentTask(null);
            }}
          />
          <Button
            title="Create"
            disabled={loading}
            onClick={() => onSubmit()}
          />
        </div>
      </div>
    </Dialog>
  );
}

export default EditTaskDialog;
