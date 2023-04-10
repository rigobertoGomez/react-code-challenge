import { TaskColumn } from "@/components/common";
import { Status } from "@/models";
import { CreateTaskDialog, DeleteTaskDialog } from "@/components/common";
import { useState } from "react";
import { Button } from "@/components/ui";
import { SwitchButton } from "@/components/common";
import { PlusIcon, GridIcon, ListIcon } from "@/components/Icons";
import { useTasksContext } from "@/context";

const statusList: Status[] = [
  Status.BACKLOG,
  Status.CANCELLED,
  Status.DONE,
  Status.IN_PROGRESS,
  Status.TODO,
];

export default function Home() {
  const [openTaskDialog, setOpenTaskDialog] = useState<boolean>(false);
  
  //@ts-ignore
  const { setOpenCreateTaskDialog } = useTasksContext();

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
      <div className="flex-1 space-y-4 flex flex-grow overflow-x-auto overflow-y-hidden h-full relative">
        <div className="absolute whitespace-nowrap space-x-8 h-full">
          {statusList?.map((status) => (
            <TaskColumn key={`${status}_COLUMN`} status={status} />
          ))}
        </div>
      </div>
      <CreateTaskDialog />
      <DeleteTaskDialog />
    </div>
  );
}
