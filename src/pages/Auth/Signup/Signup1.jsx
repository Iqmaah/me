import { useState } from 'react'
import { Link } from "react-router-dom"
import SignupImg from '../../../assets/images/Signup.png'
import HerVest from '../../../assets/images/hervest.png'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField.jsx'
import Button from '../../../shared-components/Form/Button'


const Signup1 = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }
    

    return(
        <div className=' bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

            
      

            <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                    <div className="hidden md:block mt-2">
                        <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img>    
                    </div><br/>
                    <div className="hidden md:block mt-16 mx-20 flex justify-center">
                        <img src={SignupImg} alt="Signup today" className='' />
                    </div>              
            </div>

            <div className="relative border border-white-100 bg-white lg:mx-8 lg:my-12 rounded-2xl flex items-center py-8 ">
                
                <div className="px-20 md:px-32 w-full space-y-8">
                        <div className='absolute top-5 right-5'>
                            <p className='text-gray-800' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>Already own an account?<Link to="/Login1" className='text-[#5B2E4F]'>Log in</Link></p>
                        </div>
                        <div className='pt-4'><br/>
                          
                            <h1  style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Creates an account </h1>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}> Hey smart woman, get started by creating an account on HerVest</p>
                        
                        </div>
                        
                        <form onSubmit={onSubmit}>
                            
                                <div className='flex flex-wrap'>
                                    <div className='mb-6 md:mb-0 w-full md:w-1/2 md:pr-3'>
                                        <label htmlFor="firstname" className="sr-only">Firstname</label>
                                        <PrimaryFormField type="text" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                    </div><br />
                                    <div className='w-full md:w-1/2'>
                                    <label htmlFor="lastname" className="sr-only">Othername</label>
                                    <PrimaryFormField type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                    </div><br />
                                </div><br/> 
                                
                                <div>
                                    <label htmlFor="email" className="sr-only">Email </label>
                                    <PrimaryFormField type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div><br />
                                <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                    <PrimaryFormField type="text" placeholder="Phone number"  onChange={(e) => setPhone(e.target.value)} value={phone}  />
                                </div><br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div><br />
                                <div>
                                    <Link to="/Signup2">
                                        <Button text="NEXT"></Button>
                                    </Link>  
                                </div>
                        </form>
                </div>       
            </div>
 

        </div>
    )
}

export default Signup1