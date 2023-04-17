import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { User } from "../hooks/useUser";
import { createContext, useContext, useMemo } from "react";
import { Role } from "../hooks/useRole";

const AuthContext = createContext({
    user: null as any,
    login: (user: User) => { },
    logout: (user: User) => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    // authenticate the user
    const login = async (user: User) => {
        setUser(user);
        console.log("user: ", user);

        if (user.role[0] === Role.ADMIN) {
            navigate("/portal/dashboard");
        } else if (user.role[0] === Role.TEACHER) {
            navigate("/teacher/dashboard");
        } else if (user.role[0] === Role.PARENT) {
            navigate("/parent/dashboard");
        } else if (user.role[0] === Role.STUDENT) {
            navigate("/student/dashboard");
        } else {
            navigate("/")
        }

    };

    // logout a logged in user
    const logout = (user: User) => {
        if (user?.role[0] === Role.ADMIN) {
            navigate("/staff/login", { replace: true });
            setUser(null);
        } else {
            setUser(null);
            navigate("/", { replace: true });
        }
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