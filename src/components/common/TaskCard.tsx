import { Fragment, ReactNode } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "@/components/ui";
import {
  EllipsisHorizontalIcon,
  EditIcon,
  TrashIcon,
  AlarmIcon,
} from "@/components/Icons";
interface TagProps {
  title: string;
  variant: "red" | "green" | "yellow" | "default";
  children?: ReactNode;
}
const Tag = ({ title, variant, children }: TagProps) => {
  const variantStyles = {
    red: "bg-primary-4/10 text-primary-4",
    yellow: "bg-tertiary-4/10 text-tertiary-4",
    green: "bg-secondary-4/10 text-secondary-4",
    default: "bg-neutral-2/10 text-neutral-1",
  }[variant];
  return (
    <span
      className={clsx(
        "inline-flex items-center py-1 px-4 rounded text-[15px] font-semibold uppercase bg-primary-4/10",
        variantStyles
      )}
    >
      {children && <span className="w-6 h-6 inline-flex items-center mr-2">{children}</span>}
      {title}
    </span>
  );
};

function TaskCard() {
  return (
    <article className="w-[348px] h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-neutral-1 text-lg font-semibold flex-1 truncate">
          Twiiter
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
          Due date
        </span>
        <Tag title="Yesterday" variant="default">
          <AlarmIcon className="w-5 h-5" />
        </Tag>
      </div>
      <div className="flex items-center space-x-2">
        <Tag title="Yesterday" variant="yellow" />
        <Tag title="Yesterday" variant="green" />
      </div>
      <div className="flex items-center justify-between">
        <Avatar variant="xs" />
      </div>
    </article>
  );
}

export default TaskCard;
