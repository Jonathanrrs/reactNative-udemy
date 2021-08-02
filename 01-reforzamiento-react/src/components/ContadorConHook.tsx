import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const {valor, acumular} = useCounter(5);

    return (
        <>
            <h3>Contador coon hook: <small>{valor}</small></h3>
            <button
            className="btn btn-primary"
            onClick={() => acumular(1)}
            >
                +1
            </button>
            &nbsp;
            <button
            className="btn btn-warning"
            onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}
