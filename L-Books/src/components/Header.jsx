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
    <p>L-SHOP</p>
        <nav id="navBar">
         <ul>
            <li><a href=".">Home</a></li>
            <li><a href=".">Promotions</a></li>
            <li><a href=".">Your Cart</a></li>
         </ul>
        </nav>
    </header>
    </>
    )
}
export default Header