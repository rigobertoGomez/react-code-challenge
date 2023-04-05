import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RavnLogo from "./assets/ravn-logo.svg";
// Layouts
import { RootLayout } from "@/layouts";

// pages
import {Home, NotFound, Settings} from "@/pages";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
