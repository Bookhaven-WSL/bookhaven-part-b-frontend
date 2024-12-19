import axios from "axios";
import {
    Children,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { BrowserRouter } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const setToken = (newToken) => {
    setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token")
        }
    }, [token]);

    const contextValue = useMemo(
            () => ({
            token,
            setToken,
        }),
        [token]
    );

    console.log("Rendering authProvider")

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}



export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;