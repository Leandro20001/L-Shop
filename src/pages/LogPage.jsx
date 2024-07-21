import { Link,redirect, useNavigate } from "react-router-dom"
import { useState,useContext } from "react"
import axios from "axios"
import { LogContext } from "../context/LogContext"

function LogPage(){
    

    const {log,setLog,desLog,setUser} = useContext(LogContext)
    const navigate = useNavigate()

    const [has,setHas] = useState(false)
    const [invalid,setInvalid] = useState(false)



    const [enter,setEnter] = useState({
        name:'',
        email: '',
        password:''
    })
    if(has ==true){
        setUser(enter.email)
        setLog(true)
        navigate('/')
    }

    const sendEnter = async (event)=>{
        event.preventDefault()
        const send = async()=>{
          await axios.post('http://localhost:3000/entrar',enter,{headers:{'Content-Type':'application/json','method':'post'}}).then(data =>{
            console.log(data)
            if(data.data !==''){
                console.log('Usuario Encontrado')
                setEnter({...enter,name:data.data.name})
                setHas(true)
            
            }else setInvalid(true)
       
          })
        }
        send()
      }
      

    return(
        <>
        <span id="logSpan">Entre</span>
        <form id="loginForm">
            <label><span>E-mail</span>
                <input
                onChange={(e)=>{
                    setEnter({...enter,email:e.target.value})
                    
                }}
                type="text" />
            </label>

            <label><span>Senha</span>
                <input
                onChange={(e)=>{
                    setEnter({...enter,password:e.target.value})
                    
                }}
                type="text" />
            </label>

            <button
            onClick={sendEnter}
             id="logBtn">Entrar</button>

             {invalid&& <span id="invalid">Usuario Invalido :/</span>}
        </form>
        <Link to={'/cadastrar-se'} id="logLink">Cadastrar-se</Link>

        </>
    )
}
export default LogPage