import { useNavigate } from "react-router";
import Boton from "../../../componentes/Boton";
import { useActores } from "../hooks/useActores";
import Cargando from "../../../componentes/Cargando";
import Paginacion from "../../../componentes/Paginacion";
import ListadoGenerico from "../../../componentes/ListadoGenerico";
import confirmar from "../../../utils/confirmar";
import clienteAPI from "../../../api/clienteAxios";

export default function IndiceActores() {
    const navigate = useNavigate();

    const { cargando, pagina, recordsPorPagina, cantidadTotalRegistros, setPagina,
        setRecordsPorPagina, actores, cargarRegistros } = useActores();

        const Borrar = async (id:number) => {
            try{
                await clienteAPI.delete(`/actores/${id}`);
                if (pagina === 1){
                    cargarRegistros();
                }
                else {
                    setPagina(1);
                }
            }
            catch(err){
                console.error(err);
            } 
        }
    return (
        <>
            <h3>Actores</h3>
            <div>
                <Boton onClick={() => navigate('/actores/crear')}>Crear Actor</Boton>
            </div>


            {cargando ? <Cargando /> :
                <div className="mt-4">
                    <div className="mb-2">
                        <Paginacion paginaActual={pagina} registrosPorPagina={recordsPorPagina}
                            cantidadTotalRegistros={cantidadTotalRegistros}
                            registrosPorPaginaOpciones={[5, 10, 50]}
                            onCambioPaginacion={(pagina, recordsPorPagina) => {
                                setPagina(pagina);
                                setRecordsPorPagina(recordsPorPagina);
                            }
                            } />
                    </div>

                    <ListadoGenerico listado={actores}>
                        <table className="table table-hover align-middle shadow-sm border rounded overflow-hidden">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col" className="text-end">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {actores?.map(actor => <tr key={actor.id}>
                                    <td>{actor.nombre}</td>
                                    <td className="text-end">
                                        <Boton className="btn btn-sm btn-outline-primary me-2"
                                            onClick={() => navigate(`/actores/editar/${actor.id}`)}>
                                            <i className="bi bi-pencil me-1"></i> Editar
                                        </Boton>

                                        <Boton className="btn btn-sm btn-outline-danger me-2"
                                            onClick={() => confirmar(() => {Borrar(actor.id) })}>
                                            <i className="bi bi-trash"></i> Borrar
                                        </Boton>

                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </ListadoGenerico>
                </div>}
        </>
    )
}