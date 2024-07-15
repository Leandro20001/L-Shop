

function Modal({isOpen,children}){

    if (isOpen == true)
    return(

        <>
        
            <div className="modal">
                {children}
            </div>
        </>
    ) 
    else {
        null
    }
}
export default Modal