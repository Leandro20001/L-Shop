import Header from "../components/Header"
import ProductSpace from "../components/ProductsSpace"
import { useContext } from "react"

import { LogContext } from "../context/LogContext"
import { redirect, useNavigate,Navigate } from "react-router-dom"
function App(){
  
  const {log,user} = useContext(LogContext)
  return(
    <>
    {log ==false? 
    <Navigate to={'/entrar'}/>:null}
    <Header/>
    <ProductSpace/>
    </>
  )
}
export default App