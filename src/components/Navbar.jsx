import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">Sistema ERP-CRM para Agencia de Seguros Las Américas</h1>
        </Link>

        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard">Perfil</Link>
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">Sobre la Agencia</Link>
              </li>
              <li className="bg-indigo-500 px-3 py-1">
                <Link href="/login">Inicio de Sesión</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Registro</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
