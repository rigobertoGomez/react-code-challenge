import { NotificationIcon, SearchIcon } from "@/components/Icons";
import { Avatar } from "@/components/ui";

function TopNavigationBar() {
  return (
    <header className="h-16 flex-shrink-0 w-full bg-neutral-4 rounded-2xl flex items-center space-x-12 p-4">
      <div className="relative flex items-center flex-1 h-full">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <SearchIcon className="pointer-events-none absolute left-0 w-5 h-5 text-neutral-2" />
        <input
          id="search-field"
          className="block h-full bg-transparent outline-none w-full border-0 py-0 pl-10 pr-0 text-neutral-2 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search"       
          autoComplete="off"   
          name="search"
        />
      </div>
      <div className="inline-flex items-center space-x-6">
        <button className="text-neutral-2">
          <NotificationIcon className="h-5 w-5" />
        </button>
        <Avatar />
      </div>
    </header>
  );
}

export default TopNavigationBar;
