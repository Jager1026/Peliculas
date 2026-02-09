import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import type ActorCreacion from "../modelos/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../componentes/Cargando";
import type { SubmitHandler } from "react-hook-form";
import clienteAPI from "../../../api/clienteAxios";
import formatearFecha from "../../../utils/FormatearFecha";
import type Actor from "../modelos/Actor.model"
import { extraerErrores } from "../../../utils/extraerErrores";
import { AxiosError } from "axios";

export default function EditarActor() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [modelo, setModelo] = useState<ActorCreacion | undefined>(undefined);
    const [errores, setErrores] = useState<string[]>([])

    useEffect(() => {
        clienteAPI.get<Actor>(`/actores/${id}`).then(res => {
            const actor = res.data;
            const actorCreacion : ActorCreacion = {
                nombre: actor.nombre,
                fechaNacimiento: formatearFecha(actor.fechaNacimiento),
                foto : actor.foto
            };

            setModelo(actorCreacion);
        })
    }, [id])

    const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
        try{
            await clienteAPI.putForm(`actores/${id}`, data);
            navigate ('/sctores');
        }
        catch(err){
            const errores = extraerErrores(err as AxiosError);
            setErrores(errores);
        }
    }

    return (
        <>
            <h3>Editar Actor</h3>
            {modelo ? <FormularioActor errores={errores} modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>

    )
}
