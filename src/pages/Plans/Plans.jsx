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
                    <h style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "24px", lineHeight: "32.4px"}}>Plans</h>
                </div>
                
                <p className="text-[#B4B5C1] pb-4" style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18.9px"}}>Savings balance</p>

                <h className="font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "48px", lineHeight: "64.8px"}}>N420,548.00</h>

                {/* <div>
                    <a>My savings</a> <img src={arrows}></img>  <a>My Investments</a>
                </div> */}



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    Plans.map((Plan,i) => 

                        <div key={Plan.id} className= "grid grid-rows-2 gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <div  className="flex flex-row space-x-4">
                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                    <img src= {piggybank} alt="piggybank"/>
                                </div> 
                                <span><h2 className="text-sm pt-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>{Plan.name}</h2></span>
                            </div>

                            <div>
                                <h2 className="font-bold pb-2" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "24px", lineHeight: "32.4px"}}>{Plan.amount}</h2>
                                    
                                    <div className="w-full bg-gray-300 h-1">
                                        <div className="bg-[#5B2E4F] h-1" style={{width: "45%"}}></div>
                                    </div>  
                            </div>
                        </div>
                        
                    )
                } 
                </div><br/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-lg border border-gray-200 shadow-md ">
                        <div className="flex flex-row space-x-4 pb-4">
                            <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                <img src= {Plus} alt="Plus"/>
                            </div>  
                        </div>
                        <div className='mb-4'>
                            <h2 className="text-[#B4B5C1] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "24px", lineHeight: "32.4px"}}>Create a new plan</h2>
                        </div>
                    </div>   
                </div>
                
            </div>

        </div>
    )
} 

export default Plans