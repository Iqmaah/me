import mailImg from './../../../assets/images/resetmail.png'

const PasswordReset2 = () => {
    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">

            </div>
            <div className="border border-white-100 rounded-2xl bg-white mt-6 mb-6 mx-6 flex items-center justify-center py-12">
                    <div className="py-20 px-16 rounded-2xl max-w-md w-full space-y-8">
                        
                        <div className='flex justify-center text-center'>
                            <img src={mailImg}></img>
                        </div>
                        <div className=''><br/>
                          
                            <h1 className='font-bold text-center' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Reset link has been sent </h1>
                            <p className='text-gray-500 text-center' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>A password reset mail was sent to you. Please check your mail to verify your account.</p>
                        
                        </div>
                        
                        
                    </div>      
            </div>
        </div>
    )
}

export default PasswordReset2