import { AuthState } from "./AuthContext";

type AuthAction = 
    | {type: 'signIn'}
    | {type: 'logout'}
    | {type: 'changeFavIcon', payload: string}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
 
    switch (action.type) {
        case 'signIn':
            return {
                /* nunca mutar los objetos del estado, siempre nuevo estado */
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon': 
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return {
                ...state, 
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
    
        default:
            return state;
    }

}