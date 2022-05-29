import SignupImg from '../../../assets/images/Signup2.png'
import HerVest from '../../../assets/images/hervest.png'

const Signup2 = () => {

    

    async function onSubmit(e) {
        e.preventDefault()
    }
    

    return(
        <div className='h-full bg-slate-100 grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>

                <div className="min-h-full sm:hidden md:block sm:px-6 flex items-center justify-center py-12 px-12 lg:px-8 ">
                    <img src={HerVest} alt="HerVest logo" className='pt-5 text-center sm:hidden md:block'></img><br/>
                    <div className="grid place-items-center ">
                        <img src={SignupImg} alt="Signup today" className='w-full sm:hidden md:block' />
                    </div>              
                </div>

                <div className="mt-2 mb-5 min-h-full flex items-center justify-center py-12 px-12 sm:px-6 lg:px-8">
                    <div className="relative bg-white py-16 px-10 rounded-2xl max-w-md w-full space-y-8">
                        <div className='absolute top-5 right-5'>
                            <p className='text-gray-800' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>Already have an account? Log in</p>
                        </div>
                        <div className='pt-10'><br/>
                          
                            <h1  style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "32px", lineHeight: "43px"}} > Let’s get to know you </h1>
                            <p className='text-gray-400' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}> Hey smart woman, get started by creating an account on HerVest</p>
                        
                        </div><br/>
                        
                        <form onSubmit={onSubmit}>
                            
                            <div className="flex justify-center">
                                <div className="mb-6 xl:w-96">
                                    <select style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18px"}} className="form-select appearance-none block w-full px-3 py-4 text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300 rounded-xl transition ease-in-out m-0
                                    hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A] focus:border-[#D43E8A] focus:bg-white focus:z-10" aria-label="Default select example " placeholder='Work station'>
                                        <option selected>Work status</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 xl:w-96">
                                    <select style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18px"}} className="form-select appearance-none block w-full px-3 py-4 text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300 rounded-xl transition ease-in-out m-0
                                    hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A] focus:border-[#D43E8A] focus:bg-white focus:z-10" aria-label="Default select example " placeholder='Work station'>
                                        <option selected>Relationship status</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 xl:w-96">
                                    <select style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18px"}} className="form-select appearance-none block w-full px-3 py-4 text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300 rounded-xl transition ease-in-out m-0
                                    hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A] focus:border-[#D43E8A] focus:bg-white focus:z-10" aria-label="Default select example " placeholder='Work station'>
                                        <option selected>Number of kids</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="mb-6 xl:w-96">
                                    <select style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18px"}} className="form-select appearance-none block w-full px-3 py-4 text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300 rounded-xl transition ease-in-out m-0
                                    hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A] focus:border-[#D43E8A] focus:bg-white focus:z-10" aria-label="Default select example " placeholder='Work station'>
                                        <option selected>Average income per month</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                                    
                                <div> 
                                    <button type="submit" className='bg-[#5B2E4F] text-white w-full px-10 py-2'>NEXT</button>
                                </div>
                        </form>
                    </div>      
                </div>

        </div>
    )
}

export default Signup2