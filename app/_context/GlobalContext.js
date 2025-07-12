'use client';

import { createContext, useState } from "react";

export const GlobalContext = createContext()

const  GlobalProvider = ({children}) => {
    
    const [protocol, setProtocol] = useState("aranyak");

    return(
        <GlobalContext.Provider value={{protocol , setProtocol}}>
            {children}
        </GlobalContext.Provider> 
    )
}

export default GlobalProvider;
  