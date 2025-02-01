import React, { createContext, useState, useContext } from "react";

const StatusContext = createContext()

export const useStatus = () => useContext(StatusContext)

export const StatusProvider = ({children}) => {
    const [status, setStatus] = useState('Unregistered');

    const updateStatus = (newStatus) => setStatus(newStatus);

    return (
        <StatusContext.Provider value={{status, updateStatus}}>
            {children}
        </StatusContext.Provider>
    )
}