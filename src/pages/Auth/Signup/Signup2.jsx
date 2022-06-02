import SignupImg from '../../../assets/images/Signup2.png'
import HerVest from '../../../assets/images/hervest.png'
import Button from '../../../shared-components/Form/Button'
import Dropdown from '../../../shared-components/Form/Dropdown'

const Signup2 = () => {

    

    async function onSubmit(e) {
        e.preventDefault()
    }
    

    return(
        <div className='bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

                <div className="min-h-full hidden md:block py-8 px-12 lg:px-8 ">
                    <div className='hidden md:block mt-2'>
                        <img src={HerVest} alt="HerVest logo" className='sm:hidden md:block'></img><br/>
                    </div>
                    <div className="hidden md:block mt-16 mx-20 flex justify-center  ">
                        <img src={SignupImg} alt="Signup today" className='sm:hidden md:block' />
                    </div>              
                </div>

                <div className="relative border border-white-100 bg-white mx-10 mt-8 mb-8 rounded-2xl flex items-center justify-center py-8">
                    <div className="px-32  w-full space-y-8">
                        <div className='absolute top-5 right-5'>
                            <p className='text-gray-800' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>Already own an account? Log in</p>
                        </div>
                        <div className='pt-4'><br/>
                          
                            <h1  style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Let’s get to know you </h1>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}> Hey smart woman, get started by creating an account on HerVest</p>
                        
                        </div><br/>
                        
                        <form onSubmit={onSubmit}>
                            
                            <div className="flex justify-center">
                                <div className="mb-6 sm:w-96">
                                    <Dropdown placeholder="Work station" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 sm:w-96">
                                  <Dropdown placeholder="Relationship Status" valueArr={["1","2", "tayo","4"]}/>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 sm:w-96">
                                    <Dropdown placeholder="Number of kids" valueArr={["1","2", "tayo","4"]}/>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 sm:w-96">
                                    <Dropdown placeholder="Average income per month" valueArr={["1","2", "tayo","4"]}/>
                                </div>
                            </div> 
                                    
                                <div> 
                                    <Button text="NEXT"></Button>
                                </div>
                        </form>
                    </div>      
                </div>

        </div>
    )
}

export default Signup2