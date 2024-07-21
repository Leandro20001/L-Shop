import { useContext, useState } from "react"
import { LogContext, LogProvider } from "../context/LogContext"
import { Link } from "react-router-dom"
import { CartModal } from "./CartModal"



function NavOptions ({children,home,userName}){

    const {log,desLog,user} = useContext(LogContext)
    const [showOption,setShowOptions] = useState(false)
    const [openCart,setOpenCart] = useState(false)

    return(
        <>
        <div onMouseLeave={()=>{
            setOpenCart(false)
        }}><CartModal  open={openCart}/></div>
        <nav>
         <ul>
            <li><Link to={'/'}>Início</Link></li>
            <li onClick={()=>{
                setOpenCart(true)
            }} onMouseEnter={()=>{
                setOpenCart(true)
            }}><a>Carrinho</a></li>
            {log !== false ? <><li><a id="username">{user}</a></li>

            <div
            onClick={()=>{
                setShowOptions(!showOption)
            }}
            
            className="userPic"></div></>:<li><Link to={'/entrar'}>Entrar</Link></li>
            }
         </ul>
         {
            showOption == false? null:(
                <div id="desLogPopUp">
                    <span>Sair Da Sua Conta ?</span>
                    <button onClick={()=>{
                        desLog()
                        setShowOptions(false)
                    }}>Sim</button>
                    <button onClick={()=>{
                        setShowOptions(false)
                    }}>Não</button>
                </div>
            )
         }
        </nav>
        </>
    )
}
export default NavOptions