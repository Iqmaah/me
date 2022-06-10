import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HerVest from './../../../assets/images/hervest.png'
import LoginImg from './../../../assets/images/Login1.png'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button'

const Login1 = () => {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block flex py-8 px-12 lg:px-8 ">
                    <div className="hidden md:block mt-2">
                        <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block mt-16 mr-20 ml-28 flex justify-center items-center">
                        <img src={LoginImg} alt="Signup today" className='hidden md:block' />
                    </div>              
            </div>
            <div className="border border-white-100 rounded-2xl bg-white my-6 mx-8 flex justify-center items-center py-6">
                    <div className="py-8 px-12 rounded-2xl max-w-md w-full space-y-8">
                        
                        <div className=''><br/>
                          
                            <h1 className='font-bold' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Log in </h1>
                            <p className='text-gray-500' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>Feels good to have you back</p>
                        
                        </div>
                        
                        <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email </label>
                                    <PrimaryFormField type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div><br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                                </div><br />

                                <p className='text-[#5B2E4F] font-bold mb-14' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18px"}}>Forgot password?</p>
                                <div> 
                                    <Link to="/Loginmodal">
                                        <Button text="LOG IN" />
                                    </Link>
                                </div><br/>
                                <div className='flex flex-row justify-center'>
                                    <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>New user?</p>&nbsp;
                                    <Link to="/" className='text-[#5B2E4F]'>
                                        <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>Create new account</p>
                                    </Link>
                                    
                                </div>
                        </form>
                    </div>      
            </div>

        </div>
    )
}


export default Login1