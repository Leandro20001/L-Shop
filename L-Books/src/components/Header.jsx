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
        <a href=".">Home</a>
        <a href=".">Promotions</a>
        <a href=".">Contact</a>
        <a href=".">Your Cart</a>
    </header>
    </>
    )
}
export default Header