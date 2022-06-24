import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"

const SinglePlanPage = () => {
    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                    <div className="mx-8 mt-8 mb-4 font-bold">
                        <h className="text-[32px] font-[700px] leading-8 ">MBA Harvard</h>
                    </div>
                    <div className="mx-8 mb-8">
                        <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Plans</Link></span>
                        <span className="ml-2">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/SinglePlanPage">MBA Harvard</Link></span>
                    </div>

                    <div className='mx-8 p-5 md:p-10 rounded-lg bg-[#5B2E4F]
] '>
                        <div className="mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-3 md:gap-40 lg:grid-cols-3 lg:gap-60 lg:justify-around ... text-white">
                            <div>
                                <p className='text-[#FAFAFA] pb-2  text-[14px] font-[400px] leading-5'>Balance</p>
                                <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦320,000.00 </p> 
                            </div>
                            <div>
                            <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Total Savings</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦300,000.00</p>
                            </div>
                            <div>
                            <p className='text-[#FAFAFA] pb-2 text-[14px] font-[400px] leading-5'>Total Returns</p>
                            <p className='text-[#FFFFFF] text-[20px] font-[700px] leading-10'>₦20,000.00</p>
                            </div>  
                        </div>
                    </div><br/>

                    {/* <div>
                        <Link to="/Plans">
                            <div text="TOP UP" className="text-[#5B2E4F] hover:text-white bg-white hover:bg-[#5B2E4F]"></div>
                        </Link>
                        <span> 
                            <Link to="/Plans">
                                <div text="EDIT PLAN"></div>
                            </Link>
                        </span>
                        
                        <span> 
                            <Link to="/Plans">
                                <div text="PAUSE PLAN"></div>
                            </Link>
                        </span>  
                    </div> */}

                    <div className="grid grid-cols-2 gap-8">

                        <div className="grid grid-rows-2 ml-8">

                            <div className="rounded-2xl p-8 mr-8 mb-8 bg-white">
                                <div className="mb-6">
                                    <p className="text-[#666666] text-[16px] font-[400px] leading-5 pb-2">Plan</p>
                                    <h className="text-[20px] font-[400px] leading-6 BoldFonter">MBA Harvard</h>
                                </div><hr/>

                                <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-6 mt-6" style={{width: "400px"}} >
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Target amount</p>
                                        <p className='text-[16px] font-[400px] leading-6'>₦1,200,000</p>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Periodic savings</p>
                                        <p className='text-[16px] font-[400px] leading-6'>₦1,000</p>
                                    </div>

                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Start date</p>
                                        <p className='text-[16px] font-[400px] leading-6'>16th June, 2020</p>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Maturity date</p>
                                        <p className='text-[16px] font-[400px] leading-6'>20th September, 2021</p>
                                    </div>

                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Saving frequency</p>
                                        <p className='text-[16px] font-[400px] leading-6'>Monthly</p>
                                    </div>
                                    
                                    <div >
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Saving tenure</p>
                                        <p className='text-[16px] font-[400px] leading-6'>1 year</p>
                                    </div>
                                </div>

                            </div>

                            <div className="border border-[#F4CDE0] rounded 2xl text-center p-4" style={{height: "122px",}}>
                                <h className="text-[16px] font-[500px] leading-5 MediumFonter ">Stop automated saving?</h>
                                <div className="mt-4 px-12">
                                    
                                        <Button text="PAUSE SAVINGS" className></Button>
                                    
                                </div>
                                
                            </div>                           

                        </div>

                        <div className="bg-white rounded-2xl">


                        </div>

                    </div>


            </div>
        </div>
    )
}

export default SinglePlanPage