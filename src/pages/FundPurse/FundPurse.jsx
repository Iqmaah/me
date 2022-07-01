import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import cardellipse from "../../assets/images/cardellipse.svg"
import arrow from "../../assets/images/arrow1.png"
import creditcard from "../../assets/images/credit-card.png"
import shoppingbag from "../../assets/images/shopping-bag.png"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"
import Button from "../../shared-components/Form/Button"

const FundPurse =  () => {
    const [amount, setAmount] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>
            <div>
                    <div className="mx-8 mt-8 mb-4 font-bold">
                        <h classname="text-[32px] font-[700px] leading-8 ">Purse</h>
                    </div>
                    <div className="mx-8 mb-8">
                        <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Plans">Purse</Link></span>
                        <span className="ml-2">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/CreatePlan">FundPurse</Link></span>
                    </div>

                    <div className="bg-white rounded-2xl m-8 px-12 py-8">
                        <div className="pb-8">
                            <Link to="/Purse">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                            </Link>
                        </div>

                        <div className='flex flex-row space-x-16 h-screen'>
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter">How much will you like to add to your purse?</h>
                            
                            </div>

                            <div>
                                <form onSubmit={onSubmit}>
                                        <div className="">
                                            <label htmlFor="amount" className="sr-only">Enter amount</label>
                                            <PrimaryFormField type="number" placeholder="Enter amount"  onChange={(e) => setAmount(e.target.value)} value={amount} />
                                            
                                        </div><br/>            
                                        <div> 
                                                <Link to="/PursePaymentMethod"> 
                                                    <Button text="NEXT"></Button>
                                                </Link>
                                        </div>
                                </form>
                            </div>
                        </div>

                    </div>

            </div>

        </div>
    )
}

export default FundPurse