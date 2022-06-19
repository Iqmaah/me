import { useState } from 'react'
import {Link} from 'react-router-dom'
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
                            <p className='text-gray-400 text-[16px] font-[500px] leading-4'>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] text-[16px] font-[500px] leading-4'><Link to="/" className='text-[#5B2E4F] MediumFonter'>Create new account</Link></p>
                        </div>
                        
                        <div className=''><br/><br/>
                          
                            <h1 className='text-center text-[#626375] BoldFonter text-[32px] font-[700px] leading-10'> Create new password </h1>
                            
                        
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
                                    <Link to="/Login2">
                                        <Button text="RESET PAASSWORD" />
                                    </Link>
                                </div><br/>
                                
                        </form>
                    </div>      
            </div>

        </div>
    )
}

export default PasswordReset3