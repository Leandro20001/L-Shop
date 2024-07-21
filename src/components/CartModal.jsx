import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function CartModal({open}){
    const {cart} = useContext(CartContext)
    cart.map((e)=>{
        console.log(e.name)
    })
    if(open)
    return(
        <div id="cartModal">
            <span id="cartMainSpan">Itens:</span>

            {cart.map((p)=>
                <div className="cartModalProduct">
                <div id="cartModalImg">
                    <img src="../src/imgs/lord_book.png" alt="" />
                </div>
                <div className="cartModalInfo">
                    <span>{p.name}</span>
                    <span id="priceInfo">{p.price} R$</span>
                </div>
            </div>
            )}

        </div>
    )
}