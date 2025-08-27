import { useParams } from "react-router"

export default function EditarPelicula() {
    const { id } = useParams();
    return (
        <>
            <h3>Editar Pelicula</h3>
            <p>El id es {id}</p>
        </>
    )
}