import { createContext, useContext, useState } from "react";

type LoadingContextType = {
    loading: boolean;
    setLoading: any;
}

export const LoadingContext = createContext<LoadingContextType>({
    loading: false,
    setLoading: null,
})

const LoadingProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(false);

    return <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
    </LoadingContext.Provider>
}

export const useLoading = () => {
    return useContext(LoadingContext);
}

export default LoadingProvider;
