import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button.jsx'
import { ResetPassword } from '../../../services/network/api.js'

const PasswordReset1 = () => {

    const [email, setEmail] = useState("")

    const resetPasswordData = {
        email
    }

    const onPasswordReset= async() => {
        const response = await ResetPassword.resetPassword(resetPasswordData)
        console.log('message', response.data.message)
    }

    const handleResetPassword = () => {
        onPasswordReset()
    }

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">

            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                    <div className="py-16 px-16 lg:px-28 w-full space-y-8">
                        <div className='absolute top-10 right-12 flex flex-row'>
                            <p className='text-gray-400 text-[16px] font-[500px] leading-4' >New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] font-bold text-[16px] font-[500px] leading-4'><Link to="/" className='text-[#5B2E4F] MediumFonter'>Create new account</Link></p>
                        </div>
                        <div className=''><br/>
                          
                            <h1 className='font-bold BoldFonter text-[32px] font-[700px] leading-10'> Reset Password </h1>
                            <p className='text-gray-500  text-[16px] font-[400px] leading-6'>A mail would be sent to your email</p>
                        
                        </div>
                        
                        <form onSubmit={handleOnSubmit}>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email </label>
                                    <PrimaryFormField type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div><br />

                                <p className='text-[#5B2E4F] font-bold mb-14' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18px"}}>Forgot password?</p>
                                <div>
                                    <Link to="/PasswordReset2" className='text-[#5B2E4F]'>
                                        <Button text="SEND RESET LINK"  onClick={onPasswordReset}/>
                                    </Link> 
                                
                                </div><br/>
                               
                        </form>
                    </div>      
            </div>
        </div>
    )
}

export default PasswordReset1