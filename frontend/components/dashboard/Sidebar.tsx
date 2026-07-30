import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Proyectos",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Tareas",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Equipo",
    href: "/team",
    icon: Users,
  },
  {
    title: "Configuración",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-10">
        NEXUS
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}