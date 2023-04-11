import { Disclosure } from "@headlessui/react";
import { Task, PointEstimate } from "@/models";
import { Avatar } from "@/components/ui";
// import TimerTag from "./TaskCard/TimerTag";
// import { Tag } from "./TaskCard";
import { TasksEmptyState, Tag, TimerTag } from "@/components/common";
import { ChevronIcon } from "@/components/Icons";

interface TaskTableProps {
  tasks: Task[];
  status: string;
  loading: boolean;
}

interface TaskListRowProps {
  task: Task;
  index: number;
}

const TaskListRow = ({ task, index }: TaskListRowProps) => {
  return (
    <div className="flex items-stretch flex-nowrap divide-x divide-neutral-3 text-neutral-1 border-b last:border-b-0 border-neutral-3">
      <div className="flex-1 inline-flex items-center py-3 pr-2 pl-8 relative">
        <span className="absolute left-0 top-1">
          <TimerTag date={task?.dueDate} variant="indicator" />
        </span>
        <div className="space-x-2">
          <span>{`0${index}`}</span>
          <span>{task?.name}</span>
        </div>
      </div>
      <div className="flex-shrink-0 inline-flex  items-center py-3 px-2 w-[180px] text-neutral-1 text-[15px]">
        <ul className="inline-flex space-x-1">
          {task?.tags?.slice(0, 1).map((tag) => (
            <li key={tag} className="flex-shrink-0">
              <Tag
                title={`${String(tag).replaceAll("_", " ")}`}
                variant="green"
              />
            </li>
          ))}
          {task?.tags?.length > 1 && (
            <Tag title={`+${task?.tags?.length - 1}`} variant="default" />
          )}
        </ul>
      </div>
      <div className="flex-shrink-0 inline-flex items-center py-3 px-2 w-[140px] text-neutral-1 text-[15px]">
        {`${PointEstimate[task?.pointEstimate]} points`}
      </div>
      <div className="flex-shrink-0 py-3 px-3 w-[166px] inline-flex items-center space-x-2">
        <div className="flex-shrink-0 inline-flex">
          <Avatar
            src={task?.assignee?.avatar}
            title={task?.assignee?.fullName}
            alt={task?.assignee?.fullName}
            variant="xs"
          />
        </div>
        <span className="truncate text-neutral-1 text-[15px]">
          {task?.assignee?.fullName}
        </span>
      </div>
      <div className="flex-shrink-0 px-2 inline-flex items-center w-[140px] text-neutral-1 text-[15px]">
        <TimerTag date={task?.dueDate} variant="flat" />
      </div>
    </div>
  );
};

function TaskTable({ status, tasks, loading }: TaskTableProps) {
  return (
    <div className="w-full bg-neutral-4 rounded border border-neutral-3">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-neutral-1 hover:bg-neutral-3 focus:outline-none focus-visible:ring border-b border-neutral-3 transition-all">
              <div className="text-white flex-shrink-0 h-8 text-lg flex items-center font-semibold">
                <ChevronIcon
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-3 w-3 text-neutral-2 mr-3.5 transition-all ease-in-out duration-200`}
                />
                <span className="capitalize">
                  {status?.replaceAll("_", " ").toLocaleLowerCase()}
                </span>
                <span className="ml-1.5 text-neutral-2">
                  ({tasks?.length || 0})
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <ul className="">
                {loading ? (
                  Array(3)
                    .fill("")
                    .map((_, index) => (
                      <li
                        key={`${status}_LOADER_${index}`}
                        className="p-3 bg-neutral-4 rounded-lg flex items-center justify-between border-b last:border-b-0 border-neutral-3"
                      >
                        <div className="flex-1">
                          <span className="bg-neutral-3 inline-flex h-4 w-56 rounded animate-pulse"></span>
                        </div>
                        <div className="flex-shrink-0 px-4 w-[180px]">
                          <span className="bg-neutral-3 h-6 w-20 rounded animate-pulse block"></span>
                        </div>
                        <div className="px-4 flex-shrink-0 w-[140px]">
                          <span className="bg-neutral-3 h-4 w-24 rounded animate-pulse block"></span>
                        </div>
                        <div className="px-4 flex-shrink-0 inline-flex items-center space-x-2 w-[160px]">
                          <span className="h-8 w-8 rounded-full flex-shrink-0 bg-neutral-3 animate-pulse"></span>
                          <span className="h-4 rounded w-20 flex-shrink-0 bg-neutral-3 animate-pulse"></span>
                        </div>
                        <div className="px-4 w-[140px] flex-shrink-0">
                          <span className="bg-neutral-3 h-4 w-20 rounded animate-pulse block"></span>
                        </div>
                      </li>
                    ))
                ) : (
                  <>
                    {tasks.length > 0 ? (
                      <>
                        {tasks?.map((task: Task, index: number) => (
                          <li key={task?.id}>
                            <TaskListRow task={task} index={++index} />
                          </li>
                        ))}
                      </>
                    ) : (
                      <li className="h-full flex flex-col items-center justify-center py-8">
                        <TasksEmptyState />
                      </li>
                    )}
                  </>
                )}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default TaskTable;
