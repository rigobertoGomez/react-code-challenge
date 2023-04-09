import { Task } from "@/models";
import { useState, createContext, ReactNode, useContext } from "react";

const TasksContext = createContext();

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [openDeleteTaskDialog, setOpenDeleteTaskDialog] =
    useState<boolean>(false);
  const [openCreateTaskDialog, setOpenCreateTaskDialog] =
    useState<boolean>(false);

  return (
    <TasksContext.Provider
      value={{
        currentTask,
        setCurrentTask,
        openDeleteTaskDialog,
        setOpenDeleteTaskDialog,
        openCreateTaskDialog,
        setOpenCreateTaskDialog
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
