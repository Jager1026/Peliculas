import type SelectorMultipleModel from "./SelectorMultiple.model";
import styles from './SelectorMultiple.module.css'

export default function SelectorMultiple(props: SelectorMultipleProps) {

    const seleccionar = (item: SelectorMultipleModel) => {
        const seleccionados = [...props.seleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);

        props.onChange(seleccionados, noSeleccionados);
    }

    const deseleccionar = (item: SelectorMultipleModel) => {
        const noSeleccionados = [...props.noSeleccionados, item];
        const seleccionados = props.seleccionados.filter(valor => valor !== item);

        props.onChange(seleccionados, noSeleccionados)
    }

    const seleccionarTodo = () => {
        const seleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const noSeleccionados: SelectorMultipleModel[] = [];

        props.onChange(seleccionados, noSeleccionados);
    }

    const deseleccionarTodo = () => {
        const noSeleccionados = [...props.seleccionados, ...props.noSeleccionados]
        const seleccionados: SelectorMultipleModel[] = [];

        props.onChange(seleccionados, noSeleccionados);
    }

    return (
        <div className={styles.div}>
            <ul>
                {props.noSeleccionados.map(item => <li key={item.llave}
                    onClick={() => seleccionar(item)}
                >{item.descripcion}</li>)}
            </ul>
            <div className={styles.botones}>
                <button onClick={seleccionarTodo} type="button">{'>>'}</button>
                <button onClick={deseleccionarTodo} type="button">{'<<'}</button>
            </div>

            <ul>
                {props.seleccionados.map(item => <li key={item.llave}
                    onClick={() => deseleccionar(item)}
                >{item.descripcion}
                </li>)}

            </ul>

        </div>
    )
}

interface SelectorMultipleProps {
    seleccionados: SelectorMultipleModel[];
    noSeleccionados: SelectorMultipleModel[];
    onChange(seleccionados: SelectorMultipleModel[], noSeleccionado: SelectorMultipleModel[]): void;
}