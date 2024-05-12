import { createContext, useContext } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
    return (
        <GlobalContext.Provider value="Chubi">
            {children}
        </GlobalContext.Provider>
    );
}


export function useName() {
    return useContext(GlobalContext)
}