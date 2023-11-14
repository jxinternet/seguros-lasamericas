import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import Polize from "@/src/models/Polize";
import { connectDB } from "@/src/lib/mongodb";

export default async function crear() {
    await connectDB();
    const poliza = await Polize.find();
    const id = poliza.pop()
    const codigo = id.codigoPoliza
    return (
      <>
        <InputCodigoSeguro data={codigo} />
        <FormClientData data={codigo} />
      </>
    );
}
