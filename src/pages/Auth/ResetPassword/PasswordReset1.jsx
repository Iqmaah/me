import { useEffect, useState } from 'react'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button.jsx'

const PasswordReset1 = () => {

    const [email, setEmail] = useState("")

    async function onSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">

            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6">
                    <div className="py-16 px-16 lg:px-28 w-full space-y-8">
                        <div className='absolute top-10 right-12 flex flex-row'>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>Create new account</p>
                        </div>
                        <div className=''><br/>
                          
                            <h1 className='font-bold' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Reset Password </h1>
                            <p className='text-gray-500' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>A mail would be sent to your email</p>
                        
                        </div>
                        
                        <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email </label>
                                    <PrimaryFormField type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div><br />

                                <p className='text-[#5B2E4F] font-bold mb-14' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18px"}}>Forgot password?</p>
                                <div> 
                                <Button text="SEND RESET LINK" />
                                </div><br/>
                                <div className='flex flex-row justify-center'>
                                    <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>New user?</p>&nbsp;
                                    <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>Create new account</p>
                                </div>
                        </form>
                    </div>      
            </div>
        </div>
    )
}

export default PasswordReset1