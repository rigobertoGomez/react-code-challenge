import { useState, Fragment } from "react";
import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { Status } from "@/models";
import { EstimateIcon } from "@/components/Icons";
import { Tag } from "@/components/common/TaskCard";

interface StatusSelectProps {
  onChange: (value: string | undefined) => void;
}

// interface Status {
//   name: string;
//   value: Status;
// }

const statusOptions: string[] = [...Object.keys(Status)];

function StatusSelect({ onChange }: StatusSelectProps) {
  const [selected, setSelected] = useState<string | undefined>('');

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onChange(value);
      }}
    >
      <div className="relative inline-block text-left">
        <Listbox.Button className="outline-none">
          <div            
            className="bg-neutral-1/10 text-neutral-1 px-4 py-1 inline-flex items-center space-x-2 rounded max-w-[200px]"
          >            
            <span className="truncate">
              {selected ? selected : "Status"}
            </span>
          </div>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute px-1 py-1 right-0 mt-2 w-[160px] origin-top-right rounded-md bg-neutral-3 shadow-lg ring-1 ring-neutral-2 focus:outline-none space-y-1">
            <span className="font-semibold text-neutral-2 text-xl px-3">
              Status
            </span>
            <Listbox.Options className="divide-y divide-gray-100 outline-none">
              <div>
                {statusOptions?.map((option) => (
                  <Listbox.Option key={option} value={option}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-neutral-4 text-white" : "text-neutral-1"
                        } group flex w-full text-[15px] items-center rounded-md px-4 py-2 text-sm`}
                      >
                        <span>{option?.replaceAll("_", " ")}</span>
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </div>
            </Listbox.Options>
          </div>
        </Transition>
      </div>
    </Listbox>
  );
}

export default StatusSelect;
