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
    <p id="logoT">L-SHOP</p>
    <div id="mobileOptions">
        <img src="../src/imgs/burguerIco.png" alt="" />
    </div>

    <div id="desktopOptions">
        <NavOptions>
            <UserPic/>
        </NavOptions>
    </div>
    </header>
    <input id="searchBar" type="text" placeholder="Buscar Produto" />
    </>
    )
}
export default Header