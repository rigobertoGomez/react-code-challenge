import { CreateTaskDialog, EditTaskDialog, DeleteTaskDialog } from "@/components/common";
import { Button } from "@/components/ui";
import { SwitchButton, TableView, GridView } from "@/components/common";
import { PlusIcon} from "@/components/Icons";
import { useTasksContext } from "@/context";

export default function Home() {
  //@ts-ignore
  const { setOpenCreateTaskDialog, view } = useTasksContext();

  return (
    <div className="h-full space-y-8 flex flex-col">
      <div className="flex items-center justify-between space-x-2 h-10 flex-shrink-0">
        <div className="flex items-center">
          <SwitchButton />
        </div>
        <Button onClick={() => setOpenCreateTaskDialog(true)}>
          <PlusIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-hidden h-full relative">
        {view === "GRID" ? <GridView /> : <TableView />}
      </div>
      <CreateTaskDialog />
      <EditTaskDialog />
      <DeleteTaskDialog />
    </div>
  );
}
