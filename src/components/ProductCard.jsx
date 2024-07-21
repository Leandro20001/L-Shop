import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import CartSpan from "./CartSpan"
import { CartContext } from "../context/CartContext"



function ProductCard({name,price,id,img,hide}){
    const [spanCard,setSpanCard] = useState(false)
    {spanCard&&setTimeout(()=>{setSpanCard('hide')},3000)}

    const [add,setAdd]= useState({
        id:id,
        name:name,
        price:price,
        img:img

    })
    const {cart,setCart} = useContext(CartContext)

    const addItem = ()=>{
        setCart([...cart,add])
    }
    

    const navigate = useNavigate()
    return(
        <>
        {spanCard&&<CartSpan product={name} hide={spanCard}/>}
            <div className="pCard">
                <div id="img"><img src="../src/imgs/lord_book.png" alt="foto" /></div>

                <div className="productSpan">
                    <span>{name}</span>
                    <span id="price">{price} R$</span>
                </div>

                <button className="buyButton" onClick={()=>{
                    navigate('/livros/compra')
                }}>
                    Comprar
                </button>

                <button className="cartButton" onClick={()=>{
                    setSpanCard(true)
                    setAdd({...add,id:id,name:name,price:price})
                    setTimeout(()=>{
                        addItem()
                    },200)
                }}>
                    Adicionar Ao Carrinho
                </button>
            </div>
        </>
    )
}
export default ProductCard