import  {useNavigate} from 'react-router-dom'
function ProductSpace(){

    const teste = ((e)=>{
        alert(e.target)

    })

    const navigate = useNavigate()

    function moveisPage(){
        return navigate('/moveis')
    }

    function eletronicsPage(){
        return navigate('/eletronicos')
    }
    function booksPage(){
        return navigate('/livros')
    }
    return(
        <div id="productSpace">
            <div className="productB">
                <img onClick={booksPage} src="./src/imgs/books.png" alt="Books" />
                <p>Livros</p>
            </div>

            <div className="productB">
                <img onClick={eletronicsPage}  src="./src/imgs/eletronics.png" alt="Eletronics" />
                <p>Eletrônicos</p>
            </div>

            <div className="productB">
                <img onClick={moveisPage} src="./src/imgs/moveis.png" alt="Moveis" />
                <p>Moveis</p>
            </div>


            <div onClick={teste} id="carrossel">
                <img src="./src/imgs/foto2.jpg" alt="" />
            </div>
        </div>
    )
}
export default ProductSpace