import { useNavigate } from "react-router-dom"
import { useState } from "react"

import CartSpan from "./CartSpan"



function ProductCard({name,price,purchase,id,hide}){
    const [spanCard,setSpanCard] = useState(false)

    {spanCard&&setTimeout(()=>{setSpanCard('hide')},3000)}



    //trazer context cart
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
                }}>
                    Adicionar Ao Carrinho
                </button>
            </div>
        </>
    )
}
export default ProductCard