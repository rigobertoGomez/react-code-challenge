import { useState, Fragment, useEffect } from "react";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Status } from "@/models";
import { CalendarIcon } from "@/components/Icons";
import { Tag } from "@/components/common/tasks/TaskCard";
import Calendar from "react-calendar";
import { formatDate } from "@/utilities";
import "./DueDateSelect.css";

interface DueDateSelectProps {
  onChange: (value: string | undefined) => void;
  defaultValue: string;
}

function StatusSelect({ onChange, defaultValue }: DueDateSelectProps) {
  const [value, setValue] = useState<string | Date | undefined>("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChangeValue = (value: string) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Menu>
      <div className="relative inline-block text-left">
        <Menu.Button className="outline-none">
          <div
            className={clsx(
              "bg-neutral-1/10 text-neutral-1 px-4 py-1 inline-flex items-center space-x-2 rounded max-w-[200px]"
            )}
          >
            <CalendarIcon className="w-4 h-4" />
            <span className="truncate">
              {value ? formatDate(value) : "Due Date"}
            </span>
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
          <div className="absolute overflow-hidden mx-auto mt-2 w-[280px] origin-top rounded-md bg-neutral-5 text-neutral-1 text-sm shadow-lg ring-1 ring-neutral-2 focus:outline-none">
            {/* @ts-ignore */}
            <Menu.Items static>
              <div className="divide-y divide-neutral-2">
                <div className="relativ espace-y-4">
                  <Calendar
                    onChange={(value) => onChangeValue(String(value))}
                    value={value}
                    locale="en-GB"
                  />
                  <div className="border-t border-neutral-2">
                    <button
                      className="w-full py-3 hover:bg-neutral-4 text-primary-4 text-center"
                      onClick={() => onChangeValue(String(new Date()))}
                      type="button"
                    >
                      Today
                    </button>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </div>
    </Menu>
  );
}

export default StatusSelect;
