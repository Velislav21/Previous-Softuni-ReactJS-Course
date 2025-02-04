import { useContext } from "react";
import { login, logout, register } from "../api/auth-api";
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
}

export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password, rePassword) => {

        const { password: _, rePassword: __, ...authData } = await register(email, password, rePassword);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
}

export const useLogout = () => {

    const { logout: localLogout } = useContext(AuthContext);

    const logoutHandler = async () => {
        await logout()

        localLogout();

    }
    return logoutHandler
}