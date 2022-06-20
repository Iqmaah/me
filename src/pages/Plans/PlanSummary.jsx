import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"

const PlanSummary = () => {
    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-4 font-bold">
                    <h classname="text-[32px] font-[700px] leading-8 ">Plans</h>
                </div>
                <div className="mx-8 mb-8">
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Plans</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/CreatePlan">Create a new plan</Link></span>
                </div>
 
                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                    <div className="pb-8">
                        <Link to="/CreatePlan">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                        </Link>
                    </div>

                    {/* <div className='grid sm:grid-rows-1 md:grid-cols-2 gap-2 h-screen'> */}
                    <div className="flex flex-row h-screen">
                        <div>
                            <h className="text-[32px] font-[700px] leading-10 BoldFonter">Here’s a summary</h>
                            <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Before you go, here’s a summary of your savings plan.</p>
                        </div>

                        <div className="rounded-2xl border-2 border-gray-300 p-4 mr-8 mb-8" style={{ width: "450px"}}>
                            <div className="mb-8">
                                <p className="text-[#666666] text-[16px] font-[400px] leading-5 pb-2">Plan</p>
                                <h className="text-[20px] font-[400px] leading-6 BoldFonter">MBA Harvard</h>
                            </div><hr/>

                            <div className="grid grid-cols-2 gap-x-20 gap-y-4 mb-8 mt-8" >
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
                            </div><hr/>

                            <div className="grid grid-cols-2 gap-x-20 gap-y-4 mt-8">
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Withholding tax</p>
                                        <p className='text-[16px] font-[400px] leading-6'>12%</p>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#666666] pb-2  text-[14px] font-[300px] leading-5'>Saving tenure</p>
                                        <p className='text-[16px] font-[400px] leading-6'>₦1,600,000</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <Link to="/">
                                <Button text="NEXT" />
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}



export default PlanSummary