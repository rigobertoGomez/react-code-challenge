import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title?: string;
  variant: string;
  selected?: boolean;
  children?: ReactNode;
  disabled?: boolean;
};

function Button({ title, variant, children, selected, disabled }: Props) {
  const styles = "inline-flex items-center justify-center rounded-lg transition-all border h-10 min-w-[40px]";
  const variantStyles = {
    primary:
      "bg-primary-4 border-primary-4 hover:bg-primary-2 hover:border-primary-2 disabled:bg-primary-2 disabled:border-primary-2 text-white text-[15px] h-10",
    secondary:
      "bg-transparent hover:bg-neutral-2 disabled:text-neutral-2 text-white",
  }[variant];
  const selectedStyles =
    variant === "secondary" ?  selected
      ? "border border-primary-4 text-primary-4"
      : "border-transparent" : '';

  return (
    <button
      className={clsx(styles, variantStyles, selectedStyles)}
      disabled={disabled}
    >
      {children ? (
        <span className="w-6 h-6 inline-flex items-center justify-center">
          {children}
        </span>
      ) : null}
      {title && (
        <span className={clsx(children && title && "ml-1")}>{title}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
