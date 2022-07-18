import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../../../shared-components/Sidebar/Sidebar"
import Dropdown from "../../../../shared-components/Form/Dropdown"
import PrimaryFormField from "../../../../shared-components/Form/PrimaryFormField"
import Button from "../../../../shared-components/Form/Button"

const HervestUser = () => { 

    const [AccountNumber, setAccountNumber] = useState("")
    const [savingTarget, setsavingTarget] = useState("")


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
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 "><Link to="/Purse">Purse</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>  
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/SendMoney1">Send money</Link></span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2"><Link to="/HervestUser">Send money to an HerVest user</Link></span>
                </div>

                <div className="bg-white rounded-2xl m-8 px-12 py-8">
                        <div className="pb-8">
                            <Link to="/SendMoney3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12.2739L19.25 12.2739" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.2988 18.2985L4.24883 12.2745L10.2988 6.24951" stroke="#626375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[16px] font-[300px] leading-6 text-[#626375]">Back</span>
                            </Link>
                        </div>

                        <div className='flex flex-row space-x-16 h-screen'>
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter">Choose an HerVest user</h>
                                <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Enter account details</p>
                            
                            </div>

                            <div>
                                <form onSubmit={onSubmit}>
                                
                                    <div className="">
                                        <label htmlFor="Account Number" className="sr-only">Account Number </label>
                                        <PrimaryFormField type="text" placeholder="Account Number"  onChange={(e) => setAccountNumber(e.target.value)} value={AccountNumber} />
                                        
                                    </div><br/>

                                    <div className="flex justify-center">
                                        <div className="mb-6 sm:w-96">
                                            <Dropdown placeholder="Account holder's name" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="default-toggle" className="relative inline-flex items-center mb-4 cursor-pointer">
                                            <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5B2E4F]"></div>
                                            <span className="ml-6 text-[12px] font-[300px] leading-4 dark:text-gray-300">Save beneficiary</span>
                                            <span className="ml-6">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.58519 7.919C5.5601 7.94672 5.53672 7.97594 5.51518 8.0065C5.49311 8.03902 5.47545 8.07433 5.46268 8.1115C5.44587 8.14457 5.43407 8.17996 5.42769 8.2165C5.42482 8.25534 5.42482 8.29433 5.42769 8.33317C5.42571 8.40969 5.4417 8.48561 5.47435 8.55484C5.50055 8.62723 5.54235 8.69297 5.59678 8.7474C5.65122 8.80184 5.71696 8.84364 5.78935 8.86984C5.85918 8.9007 5.93468 8.91664 6.01102 8.91664C6.08736 8.91664 6.16286 8.9007 6.23268 8.86984C6.30507 8.84364 6.37082 8.80184 6.42525 8.7474C6.47969 8.69297 6.52149 8.62723 6.54768 8.55484C6.57359 8.48391 6.58547 8.40863 6.58268 8.33317C6.58313 8.2564 6.56841 8.1803 6.53938 8.10922C6.51035 8.03815 6.46758 7.97351 6.41352 7.919C6.35929 7.86433 6.29477 7.82093 6.22369 7.79132C6.1526 7.7617 6.07636 7.74645 5.99935 7.74645C5.92234 7.74645 5.8461 7.7617 5.77501 7.79132C5.70393 7.82093 5.63941 7.86433 5.58519 7.919ZM5.99935 0.166504C4.84563 0.166504 3.71781 0.508623 2.75853 1.1496C1.79924 1.79057 1.05157 2.70161 0.610054 3.76752C0.168543 4.83342 0.0530237 6.00631 0.278104 7.13786C0.503185 8.26942 1.05876 9.30882 1.87456 10.1246C2.69037 10.9404 3.72977 11.496 4.86132 11.7211C5.99288 11.9462 7.16577 11.8306 8.23167 11.3891C9.29757 10.9476 10.2086 10.2 10.8496 9.24066C11.4906 8.28138 11.8327 7.15356 11.8327 5.99984C11.8327 5.23379 11.6818 4.47525 11.3886 3.76752C11.0955 3.05978 10.6658 2.41672 10.1241 1.87505C9.58247 1.33337 8.9394 0.903692 8.23167 0.61054C7.52394 0.317388 6.7654 0.166504 5.99935 0.166504ZM5.99935 10.6665C5.07637 10.6665 4.17412 10.3928 3.40669 9.88003C2.63926 9.36725 2.04112 8.63841 1.68791 7.78569C1.3347 6.93297 1.24229 5.99466 1.42235 5.08942C1.60242 4.18417 2.04687 3.35265 2.69952 2.70001C3.35216 2.04736 4.18369 1.6029 5.08893 1.42284C5.99417 1.24277 6.93249 1.33519 7.78521 1.6884C8.63793 2.04161 9.36676 2.63975 9.87954 3.40718C10.3923 4.17461 10.666 5.07686 10.666 5.99984C10.666 7.23751 10.1744 8.4245 9.29918 9.29967C8.42401 10.1748 7.23703 10.6665 5.99935 10.6665ZM5.99935 3.08317C5.69197 3.08297 5.38996 3.16374 5.12371 3.31735C4.85747 3.47095 4.63637 3.69197 4.48268 3.95817C4.44048 4.02456 4.41214 4.09881 4.39937 4.17644C4.3866 4.25407 4.38967 4.33348 4.40838 4.4099C4.4271 4.48631 4.46108 4.55815 4.50828 4.62109C4.55548 4.68403 4.61493 4.73677 4.68304 4.77615C4.75116 4.81552 4.82653 4.8407 4.90463 4.85019C4.98273 4.85968 5.06194 4.85327 5.1375 4.83135C5.21306 4.80943 5.2834 4.77245 5.3443 4.72264C5.40519 4.67283 5.45538 4.61122 5.49185 4.5415C5.54325 4.45248 5.61725 4.37863 5.70637 4.32741C5.79549 4.27619 5.89656 4.24943 5.99935 4.24984C6.15406 4.24984 6.30243 4.3113 6.41183 4.42069C6.52123 4.53009 6.58268 4.67846 6.58268 4.83317C6.58268 4.98788 6.52123 5.13625 6.41183 5.24565C6.30243 5.35505 6.15406 5.4165 5.99935 5.4165C5.84464 5.4165 5.69627 5.47796 5.58687 5.58736C5.47748 5.69675 5.41602 5.84513 5.41602 5.99984V6.58317C5.41602 6.73788 5.47748 6.88625 5.58687 6.99565C5.69627 7.10505 5.84464 7.1665 5.99935 7.1665C6.15406 7.1665 6.30243 7.10505 6.41183 6.99565C6.52123 6.88625 6.58268 6.73788 6.58268 6.58317V6.47817C6.96848 6.33818 7.29281 6.06705 7.49897 5.71218C7.70513 5.3573 7.78 4.94126 7.7105 4.53677C7.641 4.13229 7.43155 3.7651 7.11876 3.49939C6.80598 3.23368 6.40975 3.08635 5.99935 3.08317Z" fill="black"/>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="mb-6 sm:w-96">
                                            <Dropdown placeholder="Choose beneficiary" valueArr={["1","2", "tayo","4"]}></Dropdown>
                                        </div>
                                    </div>
                                        
                                    <div> 
                                        <Link to="/PlanSummary"> 
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

export default HervestUser