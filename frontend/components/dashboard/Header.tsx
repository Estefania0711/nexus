import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">
      <h2 className="text-2xl font-semibold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">
        <Search className="text-gray-400" />
        <Bell className="text-gray-400" />
        <UserCircle2 className="text-red-500" size={32} />
      </div>
    </header>
  );
}