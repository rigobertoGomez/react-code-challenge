import { Dialog, Button } from "@/components/ui";
import { useMutation, gql } from "@apollo/client";
import { CREATE_TASK, GET_TASKS } from "@/services";
import { useState } from "react";
import { useTasksContext } from "@/context/TasksContext";
import EstimateSelect from "./EstimateSelect";
import AssignmentSelect from "./AssigmentSelect";
import TagsSelect from "./TagsSelect";
import StatusSelect from "./StatusSelect";
import DueDateSelect  from "./DueDateSelect/DueDateSelect";

interface NewTaskInterface {
  name: string;
}
function CreateTaskDialog() {
  //@ts-ignore
  const { openCreateTaskDialog, setOpenCreateTaskDialog } = useTasksContext();

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
    assigneeId: "",
    dueDate: new Date(),
    pointEstimate: "",
    status: "BACKLOG",
    tags: [],
  });

  const onSubmit = async () => {
    try {
      await createTask({ variables: { input: { ...newTask } } });
      setOpenCreateTaskDialog(false);
    } catch (error) {
      console.log(error);
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
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                pointEstimate: value,
              }))
            }
          />
          <AssignmentSelect
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({ ...newTask, assigneeId: value }))
            }
          />
          <TagsSelect
            onChange={(value: string[] | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                tags: value,
              }))
            }
          />
          <StatusSelect
            onChange={(value: string | undefined) =>
              setNewtask((newTask: any) => ({
                ...newTask,
                status: value,
              }))
            }
          />
          <DueDateSelect
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
            onClick={() => setOpenCreateTaskDialog(false)}
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
