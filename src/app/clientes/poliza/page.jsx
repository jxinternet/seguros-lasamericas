import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
export default function crear() {

    return (
        <>
            <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-around'}}> 
                <FormPolize/>
                <Beneficiarios />
            </div>
            {/* <FormPayees />  MODAAAL */}
        </>
    )
}