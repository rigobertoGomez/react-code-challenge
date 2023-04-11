import { Dialog, Button } from "@/components/ui";
import { useMutation, gql } from "@apollo/client";
import { CREATE_TASK, GET_TASKS } from "@/services";
import { useState } from "react";
import { useTasksContext } from "@/context/TasksContext";
// Components
import EstimateSelect from "./EstimateSelect";
import AssignmentSelect from "./AssigmentSelect";
import TagsSelect from "./TagsSelect";
import StatusSelect from "./StatusSelect";
import DueDateSelect from "./DueDateSelect/DueDateSelect";

function CreateTaskDialog() {
  const { setCurrentTask, openCreateTaskDialog, setOpenCreateTaskDialog }: any =
    useTasksContext();

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

  const [newTask, setNewtask] = useState<any>({
    name: "",
    assigneeId: null,
    dueDate: new Date(),
    pointEstimate: "",
    status: "",
    tags: [],
  });

  const onSubmit = async () => {
    try {
      const params = {
        ...newTask,
        assigneeId: newTask?.assigneeId?.id,
      };
      await createTask({ variables: { input: { ...params } } });
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
      <div className="space-y-6">
        <div className="div">
          <input
            id="search-field"
            className="block h-full bg-transparent outline-none w-full border-0 py-2 text-neutral-1 placeholder:text-neutral-2 focus:ring-0 text-xl font-semibold"
            placeholder="Task title"
            autoComplete="off"
            name="search"
            value={newTask?.name}
            onChange={(e) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                name: e?.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <EstimateSelect
            defaultValue={newTask?.pointEstimate}
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                pointEstimate: value,
              }))
            }
          />
          <AssignmentSelect
            defaultValue={newTask.assigneeId}
            onChange={(value: any | undefined) =>
              setNewtask((newTask: any) => ({ ...newTask, assigneeId: value }))
            }
          />
          <TagsSelect
            defaultValue={newTask.tags}
            onChange={(value: string[] | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                tags: value,
              }))
            }
          />
          <StatusSelect
            defaultValue={newTask.status}
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                status: value,
              }))
            }
          />
          <DueDateSelect
            defaultValue={newTask.dueDate}
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
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
              setOpenCreateTaskDialog(false);
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

export default CreateTaskDialog;
