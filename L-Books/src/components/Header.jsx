function Header(){
    function show(){
        console.log('hello')
    }
    return(
    <>
    <header>
    <div id="burguer">
            <img onClick={show} src="./src/imgs/burguerIco.png" alt=""/>
    </div>
    <nav id="navBar">
                <a href=".">Home</a>
                <a href=".">Promotions</a>
               <a href=".">Your Cart</a>
    </nav>
    </header>
    </>
    )
}
export default Header