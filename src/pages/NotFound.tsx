import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-5">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-3">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-1 sm:text-5xl">
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md bg-primary-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-4"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
