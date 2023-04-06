import React, { ReactNode } from "react";
import { GridIcon, ListIcon } from "../Icons";
import clsx from "clsx";
import { Button } from "@/components/ui";
type ButtonItemProps = {
  children: ReactNode;
  active?: boolean;
  left?: boolean;
  right?: boolean;
};

const ButtonItem = ({ children, active, left, right }: ButtonItemProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "relative w-10 h-10 inline-flex rounded-lg items-center bg-transparent px-3 py-2 focus:z-10 hover:bg-neutral-4 transition-all",
        active
          ? "border ring-inset border-primary-4 text-primary-4"
          : "text-neutral-1"
      )}
    >
      {children}
    </button>
  );
};

export default function SwitchButton({}) {  
  return (
    <span className="isolate inline-flex rounded overflow-hidden shadow-sm -space">
      <Button variant="secondary"  >
        <ListIcon className="w-4 h-4" />
      </Button>
      <Button variant="secondary" selected>
        <GridIcon className="w-5.5 h-5.5" />
      </Button>
    </span>
  );
}
