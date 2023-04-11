import { useState, Fragment, useMemo } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { TaskTag } from "@/models";
import { TagIcon } from "@/components/Icons";
import { Tag } from "@/components/common/tasks/TaskCard";

interface TagsSelectProps {
  onChange: (value: string[] | undefined) => void;
}

const tagsOptions: string[] = [
  ...Object.values(TaskTag)
    .filter((v) => !isNaN(Number(v)))
    .map((value) => String(TaskTag[value as keyof typeof TaskTag])),
];

function TagsSelect({onChange}: TagsSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = (value: string) => {
    let updateSelected = [...selected]

    if (selected.includes(value)) {
      updateSelected = updateSelected.filter((selected) => selected !== value)
      setSelected(updateSelected)
      onChange(updateSelected);
    } else {
      updateSelected = [...updateSelected, value]
      setSelected(updateSelected);
      onChange(updateSelected);
    }
  };

  return (
    <Menu>
      <div className="relative inline-block text-left">
        <Menu.Button className="outline-none">
          <div
            title={selected.length > 0 ? `${selected}` : "Assignee"}
            className={clsx(
              "text-neutral-1 px-4 py-1 inline-flex items-center space-x-2 rounded max-w-[200px]",
              selected.length > 0 ? "bg-transparent" : "bg-neutral-1/10"
            )}
          >
            <TagIcon className="w-4 h-4" />
            <span className="truncate">Tags</span>
          </div>
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
          <div className="absolute px-1 py-1 mx-auto left-auto right-auto mt-2 w-[232px] origin-top-center rounded-md bg-neutral-3 shadow-lg ring-1 ring-neutral-2 focus:outline-none space-y-1">
            <span className="font-semibold text-neutral-2 text-xl px-3">
              Tag Title
            </span>
            <Menu.Items className="divide-y divide-gray-100 outline-none">
              <div className="">
                {tagsOptions?.map((option) => (
                  <Menu.Item as={Fragment} key={option}>
                    {({ active }) => (
                      <label
                        htmlFor={String(option)}
                        className={`${
                          active ? "bg-neutral-4" : ""
                        } group flex w-full text-[15px] items-center rounded-md px-4 py-2 text-sm text-neutral-1`}
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-neutral-2 bg-transparent border-2 border-gray-300 focus:ring-neutral-400 focus:ring-2"
                          id={String(option)}
                          name={String(option)}
                          onChange={() => handleSelected(option)}
                          checked={selected.includes(option)}
                        />
                        <span className="ml-2">
                          {String(option).replaceAll("_", " ")}
                        </span>
                      </label>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </div>
    </Menu>
  );
}

export default TagsSelect;
