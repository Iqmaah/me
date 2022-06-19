import {Link} from 'react-router-dom'
import mailImg from './../../../assets/images/resetmail.png'

const PasswordReset2 = () => {
    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">

            </div>
            <div className="border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                    <div className="py-20 px-12 lg:px-16 rounded-2xl max-w-md w-full space-y-8">
                        
                        <div className='flex justify-center text-center'>
                            <img src={mailImg}></img>
                        </div>
                        <div className=''><br/>
                          
                            <h1 className='text-center BoldFonter text-[32px] font-[700px] leading-10'> Reset link has been sent </h1>
                            <p className='text-gray-500 text-center text-[16px] font-[400px] leading-6'>A password reset mail was sent to you. Please check your mail to verify your account.</p>
                        
                        </div>
                        
                        
                    </div>      
            </div>
        </div>
    )
}

export default PasswordReset2