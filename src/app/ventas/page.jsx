import FormDifunto from "@/src/components/ventas/FormDifunto/FormDifunto";
import NumerosServicios from "@/src/components/ventas/NumeroServicios/NumerosServicios";

// Para Registrar o Actualizar Ventas

export default function Ventas() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "3rem",
        justifyContent: "space-evenly",
      }}
    >
      <FormDifunto />
      <NumerosServicios />
    </div>
  );
}
