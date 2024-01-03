import { DashboardNav } from "src/components/dashboard-nav";
import { navItems } from "src/constants/data";
import { cn } from "src/lib/utils";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
  side: boolean;
  onChange: () => void;
}

export default function Sidebar({ className, side, onChange }: SidebarProps) {
  return (
    <div className={cn("py-16 border", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="space-y-1 mb-2">
            <DashboardNav items={navItems} />
          </div>
          <button className="relative" onClick={onChange}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">
              {side ? "LTR" : "RTL"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
