import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">

          <h1 className="text-4xl font-bold text-white">
            Bienvenida a NEXUS 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Aquí podrás administrar todos tus proyectos.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            <StatsCard
              title="Proyectos"
              value="12"
              description="3 activos"
            />

            <StatsCard
              title="Tareas"
              value="38"
              description="7 pendientes"
            />

            <StatsCard
              title="Equipo"
              value="8"
              description="Miembros"
            />

            <StatsCard
              title="Progreso"
              value="92%"
              description="Promedio"
            />

            <StatsCard
              title="Clientes"
              value="25"
              description="Empresas registradas"
            />

          </section>

        </main>

      </div>

    </div>
  );
}