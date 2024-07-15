import { createContext,useState } from "react";
export const LogContext = createContext()

export const LogProvider = ({children})=>{
    const [log,setLog] = useState(true)
    const desLog = ()=>{
        setLog(false)
    }

    const [user,setUser] = useState()



    return <LogContext.Provider value={{log,setLog,desLog,user,setUser}}>
        {children}
        </LogContext.Provider>
}
