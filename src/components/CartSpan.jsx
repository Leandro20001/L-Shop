import styled from "styled-components"

function CartSpan({hide,product}){
    
    return(
        <>
        <div className={hide} id="spanCartModal">
            <span>{product} Adicionado Ao Carrinho</span>
        </div>
        </>
    )
}
export default CartSpan