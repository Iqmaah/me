import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import cardellipse from "../../assets/images/cardellipse.svg"
import arrow from "../../assets/images/arrow1.png"
import creditcard from "../../assets/images/credit-card.png"
import shoppingbag from "../../assets/images/shopping-bag.png"
import PrimaryFormField from "../../shared-components/Form/PrimaryFormField"
import Button from "../../shared-components/Form/Button"

const PaymentMethod =  () => {
    const [showModal, setShowModal] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [cardNumber, setCardNumber] = useState("")


    async function onSubmit(e) {
        e.preventDefault()
    }

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

                        <div className='flex flex-row space-x-16 h-screen'>
                            <div>
                                <h className="text-[32px] font-[700px] leading-10 BoldFonter">Choose a payment method</h>
                                <p className="text-[16px] font-[300px] leading-6 text-[#7C7F93] pt-4">Before you go, here’s a summary of your savings plan.</p>
                            </div>

                            <div className="rounded-2xl border-2 border-gray-300 p-8">
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={cardellipse}></img>
                                    <span className="pr-24">
                                        <h className="text-[16px] font-[400px] leading-6">**** 5654</h>
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Guarantee Trust Bank</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div><hr/>
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={cardellipse}></img>
                                    <span className="pr-36">
                                        <h className="text-[16px] font-[400px] leading-6">**** 1234</h>
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Sterling Bank</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div><hr/>
                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={creditcard}></img>
                                    <span className="pr-36">
                                        <button className="text-[14px] font-[500px] leading-6 MediumFonter" onClick={() => setShowModal(true)}>Add a new bank card</button>
                                    </span> 
                                </div><hr/>
                                    {/* add bank modal popup */}
                                    {showModal ? (
                                        <>
                                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        <div className="p-12">
                                                            <h1 className="text-center BoldFonter mb-2 px-4 text-[24px] font-[700px] leading-8" >Add bank card</h1>
                                                            <p className="text-center text-gray-600 px-4 pb-10 text-[14px] font-[400px] leading-5">
                                                                Enter valid card details
                                                            </p>

                                                            <div className='absolute right-5 top-2' onClick={() => setShowModal(false)} >
                                                                <Link to='/Dashboard'>
                                                                    <button type="button" className="text-gray-400 bg-[#5B2E4F]  hover:bg-[#5B2E4F] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                                                    </button>
                                                                </Link>
                                                            </div>

                                                            <form onSubmit={onSubmit}>
                                                                <div>
                                                                    <label htmlFor="Card number" className="sr-only">Card number</label>
                                                                    <PrimaryFormField type="number" placeholder="Card number" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}/>
                                                                </div><br />
                                                                <div className='flex flex-wrap'>
                                                                    <div className='mb-6 md:mb-0 w-full md:w-1/2 md:pr-3'>
                                                                        <label htmlFor="First name" className="sr-only">First name</label>
                                                                        <PrimaryFormField type="text" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                                                    </div><br />
                                                                    <div className='w-full md:w-1/2'>
                                                                    <label htmlFor="lastname" className="sr-only">Last name</label>
                                                                    <PrimaryFormField type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                                                    </div><br />
                                                                </div><br/>
                                                                <div>
                                                                    <Link to="/Plans">
                                                                        <Button text="NEXT"></Button>
                                                                    </Link>  
                                                                </div>
                                                                
                                                                
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                    {/* modal popup ends */}

                                <div className="flex flex-row items-center space-x-4 my-8">
                                    <img src={shoppingbag}></img>
                                    <span className="pr-40">
                                        <p className="text-[14px] font-[500px] leading-6 MediumFonter">Pay from purse</p>
                                    </span> 
                                    <span className="flex justify-end">
                                        <img src={arrow}></img>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

            </div>

        </div>
    )
}

export default PaymentMethod