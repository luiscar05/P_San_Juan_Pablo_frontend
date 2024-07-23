import React, { createContext, useState } from "react";

// Crear el contexto
export const UserContext = createContext();

// Crear el proveedor del contexto
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const Valor = {user,setUser}

    return (
        <UserContext.Provider value={Valor}>
            {children}
        </UserContext.Provider>
    );
};
