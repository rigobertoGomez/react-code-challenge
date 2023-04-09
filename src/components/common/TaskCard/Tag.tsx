import clsx from "clsx";
import { ReactNode } from "react";

export interface TagProps {
  title: string | undefined;
  variant: "red" | "green" | "yellow" | "default";
  children?: ReactNode;
}

function Tag({ title, variant, children }: TagProps) {
  const variantStyles = {
    red: "bg-primary-4/10 text-primary-4",
    yellow: "bg-tertiary-4/10 text-tertiary-4",
    green: "bg-secondary-4/10 text-secondary-4",
    default: "bg-neutral-1/10 text-neutral-1",
  }[variant];

  return (
    <span
      className={clsx(
        "inline-flex items-center py-1 px-4 rounded text-[15px] font-semibold uppercase",
        variantStyles
      )}
    >
      {children && (
        <span className="w-6 h-6 inline-flex items-center mr-1">
          {children}
        </span>
      )}
      {title}
    </span>
  );
}

export default Tag;
