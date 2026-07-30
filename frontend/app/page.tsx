import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-160px)] bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-7xl font-bold text-red-600">
          NEXUS
        </h1>

        <p className="mt-6 max-w-3xl text-center text-xl text-gray-300 leading-8">
          La plataforma inteligente para gestionar proyectos,
          equipos y colaboración desde un único lugar.
        </p>

        <div className="mt-10">
          <Button>
            Comenzar
          </Button>
        </div>

      </main>

      <Footer />
    </>
  );
}