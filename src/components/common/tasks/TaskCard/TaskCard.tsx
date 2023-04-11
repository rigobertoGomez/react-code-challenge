import { Fragment } from "react";
// Components
import { Menu, Transition } from "@headlessui/react";
import { Tag, TimerTag } from "@/components/common";
import { Avatar } from "@/components/ui";
import { Task, PointEstimate } from "@/models";
import { useTasksContext } from "@/context";
// Icons
import {
  EllipsisHorizontalIcon,
  EditIcon,
  TrashIcon,
} from "@/components/Icons";

interface TaskProps {
  task: Task;
  setDragged?: React.Dispatch<Task>;
}

function TaskCard({ task, setDragged }: TaskProps) {
  const {
    setOpenDeleteTaskDialog,
    setOpenEditTaskDialog,
    setCurrentTask,
  }: any = useTasksContext();

  const onDeleteTask = (task: Task) => {
    if (!task?.id) return;
    setCurrentTask(task);
    setOpenDeleteTaskDialog(true);
  };

  const onEditTask = (task: Task) => {
    if (!task?.id) return;
    setCurrentTask(task);
    setOpenEditTaskDialog(true);
  };

  const handleDragStart = () => {
    if (setDragged) {
      setDragged(task);
    }
  };

  return (
    <article
      className="w-[348px] min-h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4 cursor-move"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="flex items-center justify-between">
        <span className="text-neutral-1 text-lg font-semibold flex-1 truncate">
          {task?.name}
        </span>

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="w-6 h-6 inline-flex items-center justify-center text-neutral-2 hover:text-neutral-1 flex-shrink-0">
            <EllipsisHorizontalIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-1 w-[138px] origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-3 shadow-lg ring-1 ring-neutral-2 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-neutral-4 text-white" : "text-neutral-1"
                      } group flex w-full text-[15px] items-center rounded-md px-4 py-2 text-sm`}
                      onClick={() => onEditTask(task)}
                    >
                      <EditIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="ml-2">Edit</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-neutral-4 text-white" : "text-neutral-1"
                      } group flex w-full text-[15px] items-center rounded-md px-4 py-2 text-sm`}
                      onClick={() => onDeleteTask(task)}
                    >
                      {" "}
                      <TrashIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="ml-2">Delete</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-neutral-1 text-[15px] font-semibold">
          {`${PointEstimate[task?.pointEstimate]} points`}
        </span>
        <TimerTag date={task?.dueDate} variant="default" />
      </div>
      <ul className="flex items-center flex-wrap gap-1">
        {task?.tags?.map((tag) => (
          <li key={tag} className="flex-shrink-0">
            <Tag title={`${String(tag)?.replaceAll("_", " ")}`} variant="green" />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <Avatar
          src={task?.assignee?.avatar}
          title={task?.assignee?.fullName}
          alt={task?.assignee?.fullName}
          variant="xs"
        />
      </div>
    </article>
  );
}

export default TaskCard;
