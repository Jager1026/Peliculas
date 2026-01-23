import { useState, useEffect } from "react";
import clienteAPI from "../../../api/clienteAxios";
import Genero from "../modelos/Genero.model";

export function useGeneros(){
    const [generos, setGeneros] = useState<Genero[]>();
        const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);
        const [pagina, setPagina] = useState(1);
        const [recordsPorPagina, setRecordsPorPagina] = useState(5);
        const [cargando, setCargando] = useState(true);
    
        useEffect(() => {
            setCargando(true);
    
            clienteAPI.get<Genero[]>(`/generos`, {
                params: { pagina, recordsPorPagina }
            }).then(res => {
                const cantidadTotalRegistros = parseInt(res.headers['cantidad-total-registros']);
                setCantidadTotalRegistros(cantidadTotalRegistros);
                setGeneros(res.data);
                setCargando(false);
    
            });
        }, [pagina, recordsPorPagina]);

        return {cargando, pagina, recordsPorPagina, cantidadTotalRegistros, setPagina, setRecordsPorPagina, generos}
}