import { AuthState } from "./AuthContext";

type AuthAction = {
    type: 'signIn'
}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
 
    switch (action.type) {
        case 'signIn':
            return {
                /* nunca mutar los objetos del estado, siempre nuevo estado */
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
    
        default:
            return state;
    }

}