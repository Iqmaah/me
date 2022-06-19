import {Link} from 'react-router-dom'
import Sidebar from "../../shared-components/Sidebar/Sidebar"
import Loginmodal from '../Auth/Login/Loginmodal'
import piggybank from './../../assets/images/piggybank.png'
import Plus from './../../assets/images/Plus.png'
import arrows from './../../assets/images/arrow.png'

const Plans = () => {

    const Plans = [
        {
            "id" : "001",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          },

          {
            "id" : "003",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          },

          {
            "id" : "002",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          }
      ]

    return(
        <div className="flex min-h-screen bg-slate-50 pb-20">
            <Sidebar/>

            <div className='p-6'>
                <div className="pb-10 font-bold">
                    <h className="text-[24px] font-[700px] leading-8"> Plans</h>
                </div>
                
                <p className="text-[#B4B5C1] pb-4 text-[14px] font-[300px] leading-5">Savings balance</p>

                <h className="BoldFonter text-[40px] font-[700px] " style={{lineHeight: "64.8px"}}>N420,548.00</h>

                {/* <div>
                    <a>My savings</a> <img src={arrows}></img>  <a>My Investments</a>
                </div> */}
                <div className="mr-8 my-6">
                    <span className="text-[#B4B5C1] text-[14px] font-[400px] leading-5 ">My Savings</span>
                    <span className="ml-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66602 11.424L11.9993 8.09066L8.66602 4.75732" stroke="#5B2E4F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 11.424L7.33333 8.09066L4 4.75732" stroke="#5B2E4F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span className="text-[#5B2E4F] text-[14px] font-[400px] leading-5 ml-2">My Investments</span>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    Plans.map((Plan,i) => 

                        <div key={Plan.id} className= "grid grid-rows-2 gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <div  className="flex flex-row space-x-4">
                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                    <img src= {piggybank} alt="piggybank"/>
                                </div> 
                                <span><h2 className="pt-2 text-[16px] font-[400px] leading-8">{Plan.name}</h2></span>
                            </div>

                            <div>
                                <h2 className="BoldFonter pb-2 text-[20px] font-[700px] leading-8">{Plan.amount}</h2>
                                    
                                    <div className="w-full bg-gray-300 h-1">
                                        <div className="bg-[#5B2E4F] h-1" style={{width: "45%"}}></div>
                                    </div>  
                            </div>
                        </div>
                        
                    )
                } 
                </div><br/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <Link to="/CreatePlan">
                        <div className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-lg border border-gray-200 shadow-md ">
                            <div className="flex flex-row space-x-4 pb-4">
                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                    <img src= {Plus} alt="Plus"/>
                                </div>  
                            </div>
                            <div className='mb-4'>
                                <h2 className="text-[#B4B5C1] BoldFonter text-[24px] font-[700px] leading-8">Create a new plan</h2>
                            </div>
                        </div> 
                    </Link>  
                </div>
                
            </div>

        </div>
    )
} 

export default Plans