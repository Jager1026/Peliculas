import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";

export default function EditarPelicula() {
    const [modelo, setModelo]= useState<PeliculaCreacion | undefined>(undefined)
    const { id } = useParams();

    useEffect(()=>{
        setTimeout(()=>{
            setModelo({titulo: 'Avengers: Endgame' + id, fechaLanzamiento: '2023-10-26',
                 trailer:'abc', poster:'https://upload.wikimedia.org/wikipedia/commons/4/4d/Avengers_endgame_logo.png'})
        },500);
    },[id])

        const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
            console.log("Editando Pelicula...")
            await new Promise(resolve => setTimeout(resolve,500));
            console.log(data);
        }

    return (
        <>
            <h3>Editar Pelicula</h3>
            {modelo? <FormularioPelicula modelo={modelo} onSubmit={onSubmit}/>:<Cargando/>}
        </>
    )
}