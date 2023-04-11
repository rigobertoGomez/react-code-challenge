import { Dialog, Button } from "@/components/ui";
import { useEffect, useState } from "react";
import { useTasksContext } from "@/context/TasksContext";
import { useUpdateTask } from "@/hooks";
import { Controller, useForm } from "react-hook-form";
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

  const [updateTask, { loading, error }] = useUpdateTask(
    currentTask?.status || null
  );
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

  const { handleSubmit, control, reset, formState } = useForm({
    mode: "all",
  });

  useEffect(() => {
    if (currentTask?.id) {
      reset({
        id: currentTask?.id,
        name: currentTask?.name,
        assigneeId: currentTask?.assignee?.id,
        dueDate: new Date(currentTask?.dueDate),
        pointEstimate: currentTask?.pointEstimate,
        status: currentTask?.status,
        tags: currentTask?.tags,
        position: currentTask?.position,
      });
    }
  }, [currentTask]);

  const onSubmit = async (values: any) => {
    try {
      await updateTask({ variables: { input: { ...values } } });
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="div">
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <input
                id="search-field"
                className="block h-full bg-transparent outline-none w-full border-0 py-2 text-neutral-1 placeholder:text-neutral-2 focus:ring-0 text-xl font-semibold"
                placeholder="Task title"
                autoComplete="off"
                name="search"
                defaultValue={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Controller
            control={control}
            name="pointEstimate"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <EstimateSelect defaultValue={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="tags"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TagsSelect defaultValue={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="status"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <StatusSelect defaultValue={value} onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="dueDate"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <DueDateSelect defaultValue={value} onChange={onChange} />
            )}
          />
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button
            title="Cancel"
            variant="secondary"
            disabled={loading}
            type="button"
            onClick={() => {
              setCurrentTask(null);
              setOpenEditTaskDialog(false);
            }}
          />
          <Button
            title="Update"
            type="submit"
            disabled={!formState.isValid || loading}
          />
        </div>
      </form>
    </Dialog>
  );
}

export default EditTaskDialog;
