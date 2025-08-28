import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type ActorCreacion from "../modelos/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../componentes/Cargando";
import type { SubmitHandler } from "react-hook-form";

export default function EditarActor() {

    const { id } = useParams();

    const [modelo, setModelo] = useState<ActorCreacion | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModelo({ nombre: 'Tom ' + id, fechaNacimiento: '2022-11-23' })
        }, 1000);

        return () => clearTimeout(timerId)
    }, [id])

    const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
        console.log('Editando actor...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data)
    }

    return (
        <>
            <h3>Editar Actor</h3>
            {modelo ? <FormularioActor modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>

    )
}
