import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Button from "../../shared-components/Form/Button"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"

const PlansWithdraw = () => {
    const [amount, setAmount] = useState("")
    


    async function onSubmit(e) {
        e.preventDefault()
    } 

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div>
                <div className="mx-8 mt-8 mb-4 font-bold">
                    <h className="text-[32px] font-[700px] leading-8 ">Plans</h>
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
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/PlansWithdraw">Withdraw</Link></span>
                </div>

                <div className='bg-white grid sm:grid-rows-1 md:grid-cols-2 sm:gap-16 md:gap-16 lg:gap-32 h-screen rounded-2xl m-8 px-12 sm:pt-8 md:pt-8 lg:pt-20'>
                    <div>
                        <h className="text-[32px] font-[700px] leading-10 BoldFonter">Withdraw</h>
                        <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">You can either withdraw your money into your bank account or your purse.</p>
                    </div>
                    <div>
                        <form onSubmit={onSubmit}>
                                <div className="">
                                    <label htmlFor="amount" className="sr-only">How much will you like to withdraw?</label>
                                    <PrimaryFormField type="number" placeholder="How much will you like to withdraw?"  onChange={(e) => setAmount(e.target.value)} value={amount} />
                                    
                                </div><br/>            
                                <div> 
                                        <Link to="/TopUpBankAcc"> 
                                            <Button text="NEXT"></Button>
                                        </Link>
                                </div>
                        </form>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default PlansWithdraw