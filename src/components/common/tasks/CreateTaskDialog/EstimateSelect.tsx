import { useState, Fragment, useEffect } from "react";
import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { PointEstimate } from "@/models";
import { EstimateIcon } from "@/components/Icons";

interface EstimateSelectProps {
  onChange: (value: string | undefined) => void;
  defaultValue: string;
}

interface EstimateOption {
  name: string;
  value: PointEstimate;
}

const estimatePointsList: EstimateOption[] = [
  ...Object.keys(PointEstimate)
    .filter((v) => !isNaN(Number(v)))
    .map((value) => {
      return {
        name: value,
        value: PointEstimate[value as keyof typeof PointEstimate],
      };
    }),
];

function EstimateSelect({ onChange, defaultValue }: EstimateSelectProps) {
  const [selected, setSelected] = useState<PointEstimate | null>(null);

  useEffect(() => {
    setSelected(PointEstimate[defaultValue as keyof typeof PointEstimate] || null);
  }, [defaultValue]);

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        onChange(String(value));
      }}
    >
      <div className="relative inline-block text-left">
        <Listbox.Button className="outline-none">
          <div
            title={selected ? `${selected}` : "Assignee"}
            className={clsx(
              "text-neutral-1 px-4 py-1 inline-flex items-center space-x-2 rounded max-w-[200px]",
              selected ? "bg-transparent" : "bg-neutral-1/10"
            )}
          >
            <EstimateIcon className="w-4 h-4" />
            <span className="truncate">
              {selected ? `${selected} points` : "Estimate"}
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
          <div className="absolute px-1 py-1 left-0 mt-2 w-[138px] origin-top-right rounded-md bg-neutral-3 shadow-lg ring-1 ring-neutral-2 focus:outline-none space-y-1 z-20">
            <span className="font-semibold text-neutral-2 text-xl px-3">
              Estimate
            </span>
            <Listbox.Options className="divide-y divide-gray-100 outline-none">
              <div className="">
                {estimatePointsList?.map((option) => (
                  <Listbox.Option key={option.value} value={option?.value}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-neutral-4 text-white" : "text-neutral-1"
                        } group flex w-full text-[15px] items-center rounded-md px-4 py-2 text-sm`}
                      >
                        <EstimateIcon className="h-4 w-4 flex-shrink-0" />
                        <span className="ml-2">{`${option.name} points`}</span>
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

export default EstimateSelect;
