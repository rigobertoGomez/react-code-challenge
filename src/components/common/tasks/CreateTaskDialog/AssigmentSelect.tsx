import clsx from "clsx";
import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Avatar } from "@/components/ui";
import { UserIcon } from "@/components/Icons";
import { useUsers } from "@/hooks";
import { User } from "@/models/user";

interface AssignmentSelectProps {
  onChange: (object: User | null) => void;
  defaultValue: User;
}

function AssignmentSelect({ onChange, defaultValue }: AssignmentSelectProps) {
  const [selected, setSelected] = useState<User | null>(null);

  // Fetch users
  const { data } = useUsers();
  const users = data?.users;

  useEffect(() => {
    setSelected(defaultValue || null);
  }, [defaultValue]);

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
            title={selected ? `${selected?.fullName}` : "Assignee"}
            className={clsx(
              "text-neutral-1 px-4 py-1 inline-flex items-center space-x-2 rounded max-w-[160px]",
              selected ? "bg-transparent" : "bg-neutral-1/10"
            )}
          >
            <div className="flex-shrink-0 inline-flex">
              {selected ? (
                <Avatar
                  src={selected?.avatar}
                  alt={selected?.fullName}
                  title={selected?.fullName}
                  variant="xs"
                />
              ) : (
                <UserIcon className="w-4 h-4" />
              )}
            </div>
            <span className="truncate">
              {selected ? selected?.fullName : "Assignee"}
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
          <div className="absolute px-1 py-1 left-0 mt-2 w-[240px] origin-top-right rounded-md bg-neutral-3 shadow-lg ring-1 ring-neutral-2 focus:outline-none space-y-1 z-20">
            <span className="font-semibold text-neutral-2 text-xl px-3">
              Assign To..
            </span>
            <Listbox.Options className="divide-y divide-gray-100 outline-none">
              <div className="">
                {users?.map((user: User) => (
                  <Listbox.Option key={user.id} value={user}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-neutral-4 text-white" : "text-neutral-1"
                        } inline-flex w-full text-[15px] items-center rounded-md px-4 py-2`}
                        type="button"
                      >
                        <div className="flex-shrink-0 inline-flex">
                          <Avatar
                            src={user?.avatar}
                            alt={user.fullName}
                            title={user.fullName}
                            variant="xs"
                          />
                        </div>
                        <span className="ml-2 truncate text-[15px]">
                          {user.fullName}
                        </span>
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

export default AssignmentSelect;
