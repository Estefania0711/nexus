export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-red-600">
        NEXUS
      </h1>

      <p className="mt-6 max-w-2xl text-center text-xl text-gray-300">
        Conecta equipos, organiza proyectos y lleva el control
        de todo tu trabajo desde una única plataforma.
      </p>

      <button
        className="
          mt-10
          bg-red-600
          hover:bg-red-700
          transition
          px-8
          py-3
          rounded-xl
          text-lg
          font-semibold
        "
      >
        Comenzar
      </button>

    </main>
  );
}