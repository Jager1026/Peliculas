import type { SubmitHandler } from "react-hook-form";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type Genero from "../../generos/modelos/Genero.model";
import type Cine from "../../actores/modelos/Cine.model";

export default function CrearPelicula() {
    const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
        console.log("Creando Pelicula...")
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    const generosSeleccionados: Genero[] = [];
    const generosNoSeleccionados: Genero[] = [
        { id: 1, nombre: 'Accion' },
        { id: 2, nombre: 'Comedia' },
        { id: 3, nombre: 'Drama' }];

    const cinesSeleccionados: Cine[] = [];
    const cinesNoSeleccionados: Cine[] = [
        { id: 1, nombre: 'Unicentro Mall', latitud: 0, longitud: 0 },
        { id: 2, nombre: 'Plaza Flora Mall', latitud: 1, longitud: 1 },
        { id: 3, nombre: 'San sur plaza', latitud: 2, longitud: 2 }
    ]

    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPelicula onSubmit={onSubmit}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                actoresSeleccionados={[]}
                ></FormularioPelicula>
        </>

    )
}