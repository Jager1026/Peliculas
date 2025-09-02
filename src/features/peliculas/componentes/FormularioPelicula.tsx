import { useForm, type SubmitHandler } from "react-hook-form";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SeleccionarImagen from "../../../componentes/SeleccionarImagen";
import Boton from "../../../componentes/Boton";
import { NavLink } from "react-router";

export default function FormularioPelicula(props: FormularioPeliculaProps) {
    const {
        register, handleSubmit, setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<PeliculaCreacion>({
        resolver: yupResolver(reglasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? { titulo: '' }
    })

    const imagenActualURL: string | undefined =props.modelo?.poster ? props.modelo.poster as string : undefined;

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" id="titulo" className="form-control" autoComplete="off"
                        {...register('titulo')} />
                    {errors.titulo && <p className="error">{errors.titulo.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="fechaLanzamiento">Fecha de Lanzamiento</label>
                    <input type="date" id="fechaLanzamiento" className="form-control" autoComplete="off"
                        {...register('fechaLanzamiento')} />
                    {errors.fechaLanzamiento && <p className="error">{errors.fechaLanzamiento.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="trailer">Trailer (Youtube)</label>
                    <input type="texto" id="trailer" className="form-control" autoComplete="off"
                        {...register('trailer')} />
                </div>

                <SeleccionarImagen label="Poster" imagenURL={imagenActualURL} imagenSeleccionada={poster => {
                    setValue('poster', poster);
                }} />

                <div className="mt-2">
                    <Boton type="submit" disabled={!isValid || isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </Boton>
                    <NavLink to="/" className="btn btn-secondary ms-2">Cancelar</NavLink>
                </div>
            </form>
        </>
    )
}

interface FormularioPeliculaProps {
    modelo?: PeliculaCreacion;
    onSubmit: SubmitHandler<PeliculaCreacion>
}

const reglasDeValidacion = yup.object({
    titulo: yup.string().required('El titulo es obligatorio'),
    fechaLanzamiento: yup.string().required('La fecha de lanzamiento es obligatoria')
})