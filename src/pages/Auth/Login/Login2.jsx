import { useState } from 'react'
import { Link } from 'react-router-dom'
import HerVest from './../../../assets/images/hervest.png'
import LoginImg from './../../../assets/images/Login2.png'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button'

const Login2 = () => {
   
    const [password, setPassword] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
            <div className="min-h-full hidden md:block py-18 px-12 lg:px-8 ">
                    <div className="hidden md:block mt-2">
                        <img src={HerVest} alt="HerVest logo" className='hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block mt-16 mx-20 flex justify-center items-center">
                        <img src={LoginImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
            </div>
            <div className="relative border border-white-100 rounded-2xl bg-white my-8 mx-6 flex items-center justify-center py-6">
                    <div className="sm:px-20 lg:px-28 py-8 w-full space-y-8">
                        <div className='absolute top-10 right-12 flex flex-row'>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}>New user?</p>&nbsp;
                            <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "16px", lineHeight: "22px"}}><Link to="/" className='text-[#5B2E4F]'>Create new account</Link></p>
                        </div>
                        <div className='pt-8'><br/>
                          
                            <h1 className='font-bold' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Hello, Aminat </h1>
                            <p className='text-gray-500' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>Feels good to have you back</p>
                        
                        </div><br/>
                        
                        <form onSubmit={onSubmit}>
                                
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div><br />

                                <p className='text-[#5B2E4F] font-bold mb-14' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18px"}}>Forgot password?</p>
                                <div> 
                                    <Link to="/Loginmodal">
                                        <Button text="LOG IN" />
                                    </Link>
                                </div><br/>
                                <div className='flex justify-center'>
                                    <Link to="/">
                                        <p className='text-[#5B2E4F] font-bold' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "22px"}}>Sign up to another account</p>
                                    </Link>
                                </div>
                        </form>
                    </div>      
            </div>

        </div>
    )
}


export default Login2