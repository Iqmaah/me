
const Button = ({text, type, onClick}) => {
    return(
        
            <button type={type || "button"}
            onClick={onClick}
            onSubmit={(e)=>e.preventDefault()}
            className='bg-[#5B2E4F] rounded text-white w-full px-10 py-2'>
                {text || "Submit"}
            </button>

             
                 
        
    )
}


export default Button