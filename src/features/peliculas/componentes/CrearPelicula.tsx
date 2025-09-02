import type { SubmitHandler } from "react-hook-form";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type Genero from "../../generos/modelos/Genero.model";

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

    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPelicula onSubmit={onSubmit}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}></FormularioPelicula>
        </>

    )
}