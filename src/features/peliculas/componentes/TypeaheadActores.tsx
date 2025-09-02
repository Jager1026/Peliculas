import { Typeahead } from "react-bootstrap-typeahead";
import type ActorPelicula from "../modelos/ActorPelicula";
import type { Option } from "react-bootstrap-typeahead/types/types";

export default function TypeaheadActores() {

    const actores: ActorPelicula[] = [{
        id: 1,
        nombre: 'Tom Holland',
        personaje: '',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/330px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
    },
    {
        id: 2,
        nombre: 'Marissa Tomei',
        personaje: '',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg/330px-Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg'
    },
    {
        id: 3,
        nombre: 'Tom Hanks',
        personaje: '',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg'
    }]

    const seleccion: ActorPelicula[] = [];

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={(actores: Option[]) => {

                }}

                options={actores}
                labelKey={(opcion: Option) => {
                    const actor = opcion as ActorPelicula;
                    return actor.nombre
                }}

                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor"
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={(opcion: Option) => {
                    const actor = opcion as ActorPelicula;
                    return (
                        <>
                            <img alt="imagen actor" src={actor.foto}
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    marginRight: '10px'
                                }} />
                                <span>{actor.nombre}</span>
                        </> 
                    )
                }}
            />
        </>

    )
}