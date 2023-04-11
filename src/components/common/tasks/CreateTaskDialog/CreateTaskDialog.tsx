import { Dialog, Button } from "@/components/ui";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, GET_TASKS } from "@/services";
import { useTasksContext } from "@/context/TasksContext";
import { Controller, useForm } from "react-hook-form";
// Components
import {
  EstimateSelect,
  AssigmentSelect,
  TagsSelect,
  StatusSelect,
  DueDateSelect,
} from "@/components/common";

function CreateTaskDialog() {
  const { openCreateTaskDialog, setOpenCreateTaskDialog }: any =
    useTasksContext();

  const { handleSubmit, control, reset, formState } = useForm({
    mode: "all",
  });

  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    update(cache, { data }) {
      const { tasks }: any = cache.readQuery({
        query: GET_TASKS,
        variables: { input: { status: data.createTask.status } },
      });
      cache.writeQuery({
        query: GET_TASKS,
        variables: { input: { status: data.createTask.status } },
        data: { tasks: [data.createTask, ...tasks] },
      });
    },
  });

  const onSubmit = async (values: any) => {
    try {
      const params = {
        ...values,
        assigneeId: values?.assigneeId?.id,
      };
      await createTask({ variables: { input: { ...params } } });
      reset();
      setOpenCreateTaskDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={openCreateTaskDialog}
      close={() => setOpenCreateTaskDialog(false)}
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
                value={value || ""}
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
            name="assigneeId"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <AssigmentSelect defaultValue={value} onChange={onChange} />
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
              setOpenCreateTaskDialog(false);
              reset();
            }}
          />
          <Button
            title="Create"
            type="submit"
            disabled={!formState.isValid || loading}
          />
        </div>
      </form>
    </Dialog>
  );
}

export default CreateTaskDialog;
