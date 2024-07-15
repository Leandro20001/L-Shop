import { useState } from "react"
export function Carrossel({open,fade}){
    const img1 = "./src/imgs/foto1.jpg"
    const img2 = "./src/imgs/foto2.jpg"
    const img3 = "./src/imgs/foto3.jpg"
    const [image,setImage] = useState(img1)

    const [hide1,setHide1] = useState('')
    const [hide2,setHide2] = useState('')
    const [hide3,setHide3] = useState('')


    
    return(
        <>
        <div  id="carrossel">
        <img className={hide1} src={img1} alt="" />
        <img className={hide2} src={img2} alt="" />
        <img className={hide3} src={img3} alt="" />
        </div>

        
        <div id="moveCarrossel">
            <button onClick={()=>{
                setHide1('')
                setHide2('hide')
                setHide3('hide')
            }}></button>
            <button onClick={()=>{
                setHide1('hide')
                setHide2('')
                setHide3('hide')
            }}></button>
            <button onClick={()=>{
                setHide1('hide')
                setHide2('hide')
                setHide3('')
            }}></button>
        </div>
        </>
    )

}
