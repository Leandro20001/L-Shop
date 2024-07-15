import { useContext, useState } from "react"
import { LogContext, LogProvider } from "../context/LogContext"
import { useNavigate } from "react-router-dom"
import UserPic from "./UserPic"
import NavOptions from "./NavOptions"

function Header(){
    const home = useNavigate()
    
    const {log,user} = useContext(LogContext)
    function show(){
        console.log('hello')
    }
    return(
    <>
    {console.log(user)}
    <header>
    <div id="burguer">
            <img onClick={show} src="./src/imgs/burguerIco.png" alt=""/>
    </div>
    <p id="logoT">L-SHOP</p>
    <NavOptions>
        <UserPic/>
    </NavOptions>
    </header>
    <input id="searchBar" type="text" placeholder="Buscar Produto" />
    </>
    )
}
export default Header