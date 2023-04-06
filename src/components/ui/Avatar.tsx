import clsx from "clsx";

interface Props {
  src: string;
  alt: string;
  variant: string;
}

function Avatar({ variant, src, alt }: Props) {
  const styles = "rounded-full inline-flex items-center justify-center overflow-hidden";
  const sizeStyles = {
    xs: "w-32 h-32",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[variant];

  return (
    <span className={clsx(styles, sizeStyles)}>
      {
        src ?
        <img src={src} alt={alt} className="object-cover w-full h-full" />
        : <span className="w-full h-full bg-neutral-2"></span>
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
