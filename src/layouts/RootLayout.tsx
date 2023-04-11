import { Outlet } from "react-router-dom";
import { Sidebar, TopNavigationBar } from "@/components/layout";

export default function RootLayout() {
  
  return (
    <div className="h-screen w-screen bg-neutral-5 overflow-hidden">
      <div className="w-full h-full px-8">
        <div className="grid grid-cols-[232px_minmax(900px,_1fr)] gap-x-8 h-full">
          <aside className="w-[232px] flex-shrink-0 py-8">
            <Sidebar />
          </aside>
          <div className="flex flex-col gap-y-9 pt-8">
            {/* <TopNavigationBar /> */}
            <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
              <main className="flex-1 overflow-hidden">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
