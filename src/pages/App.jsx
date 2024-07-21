import Header from "../components/Header"
import ProductSpace from "../components/ProductsSpace"
import { useContext } from "react"

import { LogContext } from "../context/LogContext"
import { redirect, useNavigate,Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
function App(){
  
  const {log,user} = useContext(LogContext)
  const {cart,setCart} = useContext(CartContext)
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