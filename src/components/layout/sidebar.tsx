import { DashboardNav } from "src/components/dashboard-nav";
import { navItems } from "src/constants/data";
import { cn } from "src/lib/utils";

// import { Playlist } from "../data/playlists";
import { useTheme } from "next-themes";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
  side: boolean;
  onChange: () => void;
}

export default function Sidebar({ className, side, onChange }: SidebarProps) {
  const { theme } = useTheme();
  console.log(theme);
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
            <div
              className={`absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded ${
                theme === "light" ? "bg-black" : "bg-white"
              }`}
            ></div>
            <div
              className={`fold-bold relative inline-block h-full w-full rounded border-2 ${
                theme === "light" ? "border-black" : "border-white"
              } ${
                theme === "light" ? "bg-white" : "bg-black"
              } px-3 py-1 text-base font-bold ${
                theme === "light" ? "text-black" : "text-black"
              } transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent`}
            >
              {side ? "LTR" : "RTL"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
