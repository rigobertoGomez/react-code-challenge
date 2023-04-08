import clsx from "clsx";
import { UserIcon } from "@/components/Icons";
interface Props {
  src: string
  title: string
  alt: string
  variant: string
}

function Avatar({ variant, src, alt, title }: Props) {
  const styles = "rounded-full inline-flex items-center justify-center overflow-hidden";
  const sizeStyles = {
    xs: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[variant];

  return (
    <span className={clsx(styles, sizeStyles)}>
      {
        src ?
        <img src={src} alt={alt} title={title} className="object-cover w-full h-full" />
        : <span className="w-full h-full bg-neutral-2 inline-flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-neutral-1" />
        </span>
      }
    </span>
  );
}

Avatar.defaultProps = {
  src: "",
  alt: "",
  variant: "md",
};

export default Avatar;
