import {Link} from 'react-router-dom'
import mailImg from './../../../assets/images/resetmail.png'

const PasswordReset2 = () => {
    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">

            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                    <div className="py-20 px-12 lg:px-16 rounded-2xl max-w-md w-full space-y-8">
                        
                        <div className='absolute right-5 top-2' >
                                <Link to='/PasswordReset3'>
                                    <button type="button" className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                    </button>
                                </Link>
                        </div>
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