"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Signin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push("/dashboard");
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white-950 px-0 py-1 w-3/12"
      >
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">Acceso al Sistema</h1>

        <label className="text-blue-900">Correo Electrónico:</label>
        <input
          type="email"
          placeholder="Email"
          className="bg-white-800 px-4 py-2 block mb-2 w-full"
          name="email"
        />

        <label className="text-blue-900">Contraseña:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-white-800 px-4 py-2 block mb-2 w-full"
          name="password"
        />

        <button className="bg-blue-900 text-white px-4 py-2 block w-full mt-4">
          Inicio de Sesión
        </button>
      </form>
    </div>
  );
}

export default Signin;