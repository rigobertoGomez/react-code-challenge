import { Dialog, Button } from "@/components/ui";
import { useTasksContext } from "@/context/TasksContext";
import { useDeleteTask } from "@/hooks/useTasks";

function DeleteTaskDialog() {  
  const {
    openDeleteTaskDialog,
    setOpenDeleteTaskDialog,
    currentTask,
    setCurrentTask,
  }: any = useTasksContext();

  const [deleteTask, { loading, error }] = useDeleteTask();

  const onCancelAction = () => {
    setCurrentTask(null);
    setOpenDeleteTaskDialog(false);
  };

  const onDeleteTask = async () => {
    try {
      if (!currentTask?.id) return;

      await deleteTask({ variables: { input: { id: currentTask?.id } } });
      setCurrentTask(null);
      setOpenDeleteTaskDialog(false);
    } catch (error) {}
  };

  return (
    <Dialog
      open={openDeleteTaskDialog}
      close={() => setOpenDeleteTaskDialog(false)}
      maxWidth={572}
    >
      <div>
        <h1 className="text-neutral-1 text-2xl font-semibold">Delete task</h1>
        <p className="text-neutral-2 ">
          Are you sure you want to delete the task?. This action cannot be
          undone.
        </p>
        <div className="flex justify-end items-center space-x-2 mt-8">
          <Button
            title="Cancel"
            variant="secondary"
            onClick={() => onCancelAction()}
          />
          <Button title="Delete" onClick={() => onDeleteTask()} />
        </div>
      </div>
    </Dialog>
  );
}

export default DeleteTaskDialog;
