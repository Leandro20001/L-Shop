import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
function ProductPage(){
    const navigate = useNavigate('/')
    return(
    <>
    <Header/>
    <div className="showONEproduct">
        <div>
            <img src="../src/imgs/lord_book.png" alt="" />
        </div>

        <p>
        <span>Product</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates nobis eveniet illo laudantium nisi itaque, iusto reprehenderit ut quidem omnis debitis et veniam harum expedita vitae natus maxime consectetur!
        </p>
        <button onClick={buySession} className="buyButton">Comprar</button>

    </div>
    </>
    )
}
export default ProductPage