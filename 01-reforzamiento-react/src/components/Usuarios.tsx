import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    
    const paginaRef = useRef(1);

    useEffect(() => {
        /* llamado al api */
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
            paginaRef.current++;
        } else {
            alert('No hay más registros');
        }
    }

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={avatar} style={{width: 50, borderRadius: 100}}/>
                </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={cargarUsuarios}
            >
                Siguiente
            </button>
        </>
    )
}
