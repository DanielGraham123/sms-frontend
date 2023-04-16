import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { User } from "../hooks/useUser";
import { createContext, useContext, useMemo } from "react";

// interface AuthContext {
//     user: User | null;
//     setUser: (user: User | null) => void;
// }

// const AuthContext = createContext(
// {
// user: null,
// setUser: () => { },
// }
// );


const AuthContext = createContext({
    user: null as any,
    login: (user: User) => { },
    logout: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    // authenticate the user
    const login = async (user: User) => {
        setUser(user);
        console.log("user: ", user);
        navigate("/portal/dashboard");
    };

    // logout a logged in user
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    }

    const value = useMemo(() => ({
        user, login, logout
    }), [user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}