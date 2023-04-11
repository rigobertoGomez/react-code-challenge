import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  path: Partial<string>;
  title: string;
  children: ReactNode;
}

function SidebarNavItem({ path, title, children }: Props) {
  const location = useLocation();

  const styles =
    "relative p-4 block uppercase font-semibold relative flex items-center space-x-4";
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
      {location?.pathname === path && (
        <span className="w-1 h-full absolute top-0 right-0 bg-primary-4"></span>
      )}
    </NavLink>
  );
}

export default SidebarNavItem;
