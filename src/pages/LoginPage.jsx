import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function LoginPage(){

    const [log,setLog] = useState({
        name: '',
        email: '',
        address:'',
        password:''
    })
    console.log(log)

    const sendLog = async (event)=>{
        event.preventDefault()
        if(log.name !==''){
        const send = async()=>{
          await axios.post('http://localhost:3000/cadastrar-se',log,{headers:{'Content-Type':'application/json','method':'post'}}).then(console.log('req'))
        }
        send()
      } else console.log('invalido')
        }



    return(
        <>
        <span id="logSpan">Crie Sua Conta</span>

        <form id="loginForm">
            <label>Nome
                <input 
                type="text" 
                name="name"
                onChange={(e)=>{
                    setLog({...log, name:e.target.value})
                }} 
                /></label>

            <label>E-mail
                <input 
                type="text" 
                name="email"
                onChange={(e)=>{
                    setLog({...log, email:e.target.value})
                }}  
                /></label>

            <label>Endereço
                <input 
                type="text" 
                name="address"
                onChange={(e)=>{
                    setLog({...log, address:e.target.value})
                }}  />
                
            </label>
            <label>Senha
            <input 
            type="text" 
            name="password"
            onChange={(e)=>{
                setLog({...log, password:e.target.value})
            }}  
            /></label>
                

            <button onClick={sendLog} id="logBtn">Cadastrar-se</button>

        </form>
        <Link to={'/entrar'} id="logLink">Entrar</Link>
        </>
    )
}
export default LoginPage