export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 bg-zinc-950 border-b border-zinc-800">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold">
          N
        </div>

        <h1 className="text-2xl font-bold text-white">
          NEXUS
        </h1>

      </div>

      <div className="flex gap-8 text-gray-300">

        <a href="#">Inicio</a>

        <a href="#">Características</a>

        <a href="#">Contacto</a>

        <a href="/login">Iniciar sesión</a>

      </div>

    </nav>
  );
}