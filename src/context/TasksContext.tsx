import { Task } from "@/models";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

enum TasksView {
  TABLE = "TABLE",
  GRID = "GRID",
}

interface TasksContextValue {
  currentTask: Task | null;
  setCurrentTask: React.Dispatch<React.SetStateAction<Task | null>>;
  view: TasksView;
  setView: (React.Dispatch<React.SetStateAction<TasksView>> | ((task: TasksView) => void));
  openDeleteTaskDialog: boolean;
  setOpenDeleteTaskDialog: React.Dispatch<React.SetStateAction<boolean>>;
  openCreateTaskDialog: boolean;
  setOpenCreateTaskDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const TasksContext = createContext<TasksContextValue | null>(null);


const localStorageView = localStorage.getItem("view");

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [view, setView] = useState<TasksView>(TasksView[localStorageView as keyof typeof TasksView]);
  const [openDeleteTaskDialog, setOpenDeleteTaskDialog] =
    useState<boolean>(false);
  const [openCreateTaskDialog, setOpenCreateTaskDialog] =
    useState<boolean>(false);


  const handleView = (value: TasksView) => {
    setView(value);
    window.localStorage.setItem("view", value);
  };

  return (
    <TasksContext.Provider
      value={{
        currentTask,
        setCurrentTask,
        openDeleteTaskDialog,
        setOpenDeleteTaskDialog,
        openCreateTaskDialog,
        setOpenCreateTaskDialog,
        view,
        setView: handleView,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
