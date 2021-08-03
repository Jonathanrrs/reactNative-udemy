import { useState } from 'react';
import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        /* llamado al api */
        reqResApi.get<ReqResListado>('/users')
            .then(resp => {
                setUsuarios(resp.data.data)
            })
            .catch(console.log);
    }, []);

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
        </>
    )
}
