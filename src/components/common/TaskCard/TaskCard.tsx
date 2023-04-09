import { Fragment, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { useMutation } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import Tag, { TagProps } from "./Tag";
import { Avatar } from "@/components/ui";
import { Task, TaskTag, PointEstimate } from "@/models";
import { formatDate } from "@/utilities";
import { DELETE_TASK, GET_TASKS } from "@/services";
import { useTasksContext } from "@/context";

import {
  EllipsisHorizontalIcon,
  EditIcon,
  TrashIcon,
  AlarmIcon,
} from "@/components/Icons";

interface TimerTagProps {
  date: Date;
}

const TimerTag = ({ date }: TimerTagProps) => {
  const [title, setTitle] = useState<string>();
  const [variant, setVariant] = useState<TagProps["variant"]>();

  const getTaskTime = (date: Date) => {
    const today = new Date();
    const currentDate = new Date(date);
    const twoDaysAgo = new Date(date);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const title = formatDate(date);

    // Define colors
    if (currentDate >= today) {
      const onTimetitle =
        currentDate.toDateString() === today.toDateString() ? "Today" : title;
      setTitle(onTimetitle);
      setVariant("default");
      return;
    } else if (today >= twoDaysAgo && today < currentDate) {
      setVariant("yellow");
      setTitle(title);
      return;
    } else {
      setVariant("red");
      setTitle(title);
      return;
    }
  };

  useEffect(() => {
    if (date) getTaskTime(date);
  }, [date]);

  return (
    <Tag title={title} variant={variant}>
      <AlarmIcon className="w-5 h-5" />
    </Tag>
  );
};

interface TaskProps {
  task: Task;
}

function TaskCard({ task }: TaskProps) {
  const { setOpenDeleteTaskDialog, setCurrentTask } = useTasksContext();



  const onDeleteTask = async (task: Task) => {
    try {
      setCurrentTask(task);
      setOpenDeleteTaskDialog(true);
    } catch (error) {}
  };

  return (
    <article className="w-[348px] h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4">
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
        <TimerTag date={task?.dueDate} />
        {/* <Tag title="Yesterday" variant="default">
          <AlarmIcon className="w-5 h-5" />
        </Tag> */}
      </div>
      <div className="flex items-center space-x-2">
        {task?.tags?.map((tag) => (
          <Tag key={tag} title={`${tag}`} variant="green" />
        ))}
      </div>
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
