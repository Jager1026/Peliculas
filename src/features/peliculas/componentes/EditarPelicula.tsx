import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentes/Cargando";
import type Genero from "../../generos/modelos/Genero.model";
import type Cine from "../../actores/modelos/Cine.model";
import type ActorPelicula from "../modelos/ActorPelicula";

export default function EditarPelicula() {
    const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined)
    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            setModelo({
                titulo: 'Avengers: Endgame' + id, fechaLanzamiento: '2023-10-26',
                trailer: 'abc', poster: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Avengers_endgame_logo.png'
            })
        }, 500);
    }, [id])

    const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
        console.log("Editando Pelicula...")
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    const generosSeleccionados: Genero[] = [{ id: 2, nombre: 'Comedia' }];
    const generosNoSeleccionados: Genero[] = [
        { id: 1, nombre: 'Accion' },
        { id: 3, nombre: 'Drama' }];

    const cinesSeleccionados: Cine[] = [{ id: 1, nombre: 'Unicentro Mall', latitud: 0, longitud: 0 }];
    const cinesNoSeleccionados: Cine[] = [
        { id: 2, nombre: 'Plaza Flora Mall', latitud: 1, longitud: 1 },
        { id: 3, nombre: 'San sur plaza', latitud: 2, longitud: 2 }
    ]

    const actoresSeleccionados: ActorPelicula[] = [{
        id: 1,
        nombre: 'Tom Holland',
        personaje: 'Peter Parker',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/330px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
    }]


    return (
        <>
            <h3>Editar Pelicula</h3>
            {modelo ? <FormularioPelicula modelo={modelo} onSubmit={onSubmit}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                actoresSeleccionados={actoresSeleccionados}
            /> : <Cargando />}
        </>
    )
}