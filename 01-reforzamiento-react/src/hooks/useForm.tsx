import { useState } from 'react';

export const useForm = <T extends Object> (formulario: T) => { /* T es un generico */
    
    const [state, setState] = useState(formulario);

    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value
        });
    }
    
    return {
        ...state,
        formulario : state,
        onChange,
    }
}
