import { useNavigate } from "react-router";
import Boton from "../../../componentes/Boton";

export default function IndiceGeneros(){
    const navigate = useNavigate();
    return(
        <>
            <h3>Generos</h3>
            <Boton onClick={() => navigate('/generos/crear')}>Crear Género</Boton>
         </>
    )
}