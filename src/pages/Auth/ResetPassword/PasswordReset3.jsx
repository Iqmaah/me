import { useState } from 'react'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button.jsx'

const PasswordReset3 = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block lg:px-8 ">
                                  
            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-8 flex items-center justify-center py-6 ">
                    <div className="py-16 px-10  max-w-md w-full space-y-8">

                        <div className='absolute top-5 right-8 flex flex-row'>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>Create new account</p>
                        </div>
                        
                        <div className=''><br/><br/>
                          
                            <h1 className='font-bold text-center text-[#626375]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43.2px"}} > Create new password </h1>
                            
                        
                        </div>
                        
                        <form onSubmit={onSubmit} className="text-center">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email </label>
                                    <PrimaryFormField type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div><br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div><br />

                                <div className=''> 
                                    <Button text="RESET PAASSWORD" />
                                </div><br/>
                                <div className='flex flex-row justify-center'>
                                   
                                </div>
                        </form>
                    </div>      
            </div>

        </div>
    )
}

export default PasswordReset3