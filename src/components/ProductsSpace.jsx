import  {useNavigate} from 'react-router-dom'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import Fade from './Fade'
import axios from 'axios'
import { Carrossel } from './Carrossel'
function ProductSpace(){
  

    const [open,setOpen] = useState (false)
    const [fade,setFade] = useState(false)


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
        <>
        <div onClick={()=>{
            setOpen(true)
        }}>
            <Fade show={open}/>
        </div>

        <div id='banner'>
            <img src="./src/imgs/banner1.jpg" alt="" />

        </div>


         <div id="productSpace">
            <div className='selectCategoryDiv'>

               <div className="productB">
                    <img onClick={booksPage} src="./src/imgs/toys.png" alt="Toys" />
                    <p>Brinquedos & Hobbies</p>
                </div>

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
            </div>


            <Carrossel
            open={open}/>
           <Modal
           isOpen={open}>
            <button id='closeButton' onClick={()=>{
                setFade(false)
                setOpen(!open)
            }}>X</button>
           </Modal>
        </div>
        </>
       
    )
}
export default ProductSpace