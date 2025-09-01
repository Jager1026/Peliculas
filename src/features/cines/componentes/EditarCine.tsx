import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type CineCreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";

export default function EditarCine(){
    const {id} = useParams();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined)

    useEffect(()=>{
        setTimeout(() =>{
            setModelo({nombre: 'Unicentro Mall Edicion', latitud:4.540418387367919, longitud: -75.66571354867393})
        }, 1000)
    },[id]) ;

        const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
            console.log("Editando Cine...")
            await new Promise(resolve => setTimeout(resolve,500));
            console.log(data);
        }

    return(
        <>
        <h3>Editar Cine</h3>
        {modelo ? <FormularioCine modelo= {modelo} onSubmit={onSubmit}/>: <Cargando/>}
        </>
        
    )
}