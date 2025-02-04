import { createContext } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

export const AuthContext = createContext({});


export const AuthContextProvider = (props) => {

        const [authState, setAuthState] = usePersistedState('auth', {})
    
        const changeAuthState = (state) => {
            setAuthState(state)
        };

        const logout = () => {
            setAuthState(null);
        }
    
        const contextData = {
            _id: authState?._id,
            email: authState?.email,
            accessToken: authState?.accessToken,
            isAuthenticated: !!authState?.email,
            changeAuthState,
            logout
        }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}