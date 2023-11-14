"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  console.log(session, status);

  return (
      <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center text-white">
        <h1 className="font-bold text-3xl">Perfil</h1>

        <div className="text-left text-black">
        {session ? (
          <>
            <p><strong>Correo Electrónico:</strong> {session.user.email}</p>
            <p><strong>Nombre:</strong> {session.user.fullname}</p>
            <p><strong>Status:</strong> {status}</p>
          </>
        ) : (
          <p>No se ha iniciado sesión</p>
        )}
      </div>

        <button
          className="bg-zinc-800 px-4 py-2 block mb-2"
          onClick={() => {
            signOut();
          }}
        >
          Salir
        </button>
      </div>
    
  );
}

export default DashboardPage;
