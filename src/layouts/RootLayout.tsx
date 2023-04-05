import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen bg-neutral-5">
      <div className="container mx-auto">        
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
