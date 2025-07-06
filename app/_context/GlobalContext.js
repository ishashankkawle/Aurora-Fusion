'use client';

import { createContext, useState } from "react";

export const GlobalContext = createContext()

const  GlobalProvider = ({children}) => {
    
    const [isLoading, setLoadingState] = useState(false);

    return(
        <GlobalContext.Provider value={{isLoading , setLoadingState}}>
            {children}
        </GlobalContext.Provider> 
    )
}

export default GlobalProvider;
  