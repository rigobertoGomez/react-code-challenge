import { Outlet } from "react-router-dom";
import { PlusIcon, GridIcon, ListIcon } from "@/components/Icons";
import { Sidebar, TopNavigationBar } from "@/components/layout";
import { Button } from "@/components/ui";
import { SwitchButton } from "@/components/common";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen bg-neutral-5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto h-full px-8">
        <div className="grid grid-cols-[232px_minmax(900px,_1fr)] gap-x-8 h-full">
          <aside className="w-[232px] flex-shrink-0 py-8">
            <Sidebar />
          </aside>
          <div className="flex flex-col gap-y-9 pt-8">
            <TopNavigationBar />
            <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between space-x-2 h-10 flex-shrink-0">
                <div className="flex items-center">
                  <SwitchButton />
                </div>
                <Button>
                  <PlusIcon className="w-3.5 h-3.5" />
                </Button>
              </div>
              <main className="flex-1">                
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
