import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import CartSpan from '../components/CartSpan'
function BooksPage(){
    const [arrived,setArrive] = useState(false)
    const [dados,setDados] = useState()
    const modalCart = false


    const spanCart = (()=>{
        modalCart ==false
    })
    const db = async()=>{
        await axios.get('http://localhost:3000/products').then(res=>{
            setDados(res.data)
            setArrive(true)
        })
    }
    useEffect(()=>{
        db()
        console.log(dados)

    },[arrived])
    return(
        <>
        <Header/>
        <h1 className='routeH'>Rota de livros</h1>
        <div className='displayCards'>
        {arrived ==true?(
            <>
            {dados.map((p)=>
             <ProductCard
             key={p.id}
             id={p.id}
             name={p.product}
             price={p.price}
             />
            )}
            </>
        ):<span>Nenhum Produto Encontrado :/ </span>}
        </div>
    
        </>
    )
}
export default BooksPage