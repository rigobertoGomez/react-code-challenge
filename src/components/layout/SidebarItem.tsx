import { ReactNode } from "react";
import { NavLink, Path } from "react-router-dom";
import clsx from "clsx";

interface Props {
  path: Partial<string>;
  title: string;
  children: ReactNode
}

function SidebarNavItem({ path, title, children }: Props) {
  const styles = "relative p-4 block uppercase font-semibold relative flex items-center space-x-4";
  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        `${styles} ${
          isActive
            ? "text-primary-4 bg-gradient-to-l to-[#BA2525]/0 from-[#D24D4D]/10"
            : "text-neutral-2"
        }`
      }
    >
      {children}
      <span>{title}</span>    
      <span className="w-1 h-full absolute top-0 right-0 bg-primary-4"></span> 
    </NavLink>
  );
}

export default SidebarNavItem;
