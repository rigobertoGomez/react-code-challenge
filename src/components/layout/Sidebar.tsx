import { SidebarItem } from "@/components/layout";
import Logo from "@/assets/ravn-logo.svg";
import { GridIcon, ListIcon } from "@/components/Icons";

interface Menuitem  {
  title: string,
  path: string
}
const menu = [
  { title: "Dashboard", path: "/", icon: <GridIcon className="w-6 h-6" /> },  
  { title: "Settings", path: "/settings", icon: <GridIcon className="w-6 h-6" /> },  
];

function Sidebar() {
  return (
    <nav className="bg-neutral-4 rounded-3xl py-3 h-full space-y-[46px]">
      <div className="flex justify-center">
        <img src={Logo} alt="" className="w-9 h-9"  />
      </div>
      <ul className="flex-1 h-full overflow-y-auto">
        {menu?.map((menuItem) => (
          <SidebarItem key={menuItem.path} path={menuItem.path} title={menuItem.title}>
            {menuItem.icon}
          </SidebarItem>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
