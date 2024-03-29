import Sidebar from '../../shared-components/Sidebar/Sidebar'
import tobi from './../../assets/images/Tobi.png'
import bgdash from './../../assets/images/bg-dash.png'
import piggybank from './../../assets/images/piggybank.png'
import Plus from './../../assets/images/Plus.png'
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.png'
import img3 from './../../assets/images/img3.png'

const Dashboard = () => {

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

      const NewPlans = [
        {
            "id" : "001",
            "name": "Saving for rainy days",
            "create" : "Add another plan",
            "picture": [Plus]
          },

          {
            "id" : "003",
            "name": "Saving for rainy days",
            "create": "Create this plan",
            "picture": [piggybank]
          },

          {
            "id" : "002",
            "name": "Saving for rainy days",
            "create": "Create this plan",
            "picture": [piggybank]
          }
      ]

    return(
    <div className="flex min-h-screen bg-slate-50 pb-20">
        <Sidebar/>

        <div className='p-6 '>
            <div className='flex flex-row space-x-4 pb-2'>
                <img src={tobi} className=" w-14 h-14"></img>
                <div className="flex flex-col">
                    <p className="text-base text-[#B4B5C1] ">Hello,</p>
                    <span className="text-[#B4B5C1] text-lg font-bold">Oluwatobi</span>
                </div> 
            </div>


            <div className='p-5 md:p-10 rounded-lg' style={{ backgroundImage: `url(${bgdash})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "" }}>
                <div class="mx-auto grid grid-cols-2 gap-10 items-center lg:grid-cols-4 lg:justify-around ... text-white">
                    <div>
                        <p className='text-[#FAFAFA] pb-2' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18.9px"}}>Available Balance</p>
                        <p className='text-[#FFFFFF]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "40.5px"}}>₦1,063,345.04</p> 
                    </div>
                    <div>
                       <p className='text-[#FAFAFA] pb-2' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18.9px"}}>Impact Investments</p>
                       <p className='text-[#FFFFFF]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "40.5px"}}>₦1,007,345.04</p>
                    </div>
                    <div>
                       <p className='text-[#FAFAFA] pb-2' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18.9px"}}>Total Savings</p>
                       <p className='text-[#FFFFFF]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "40.5px"}}>₦2,007,345.04</p>
                    </div>
                    <div>
                       <p className='text-[#FAFAFA] pb-2' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18.9px"}}>Total Returns</p>
                       <p className='text-[#FFFFFF]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "40.5px"}}>₦56,000.00</p>
                    </div>  
                </div>
            </div><br/>


            <div>
                  <h1 className='font-bold text-[#B4B5C1]' style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "43.2px"}}>Watch your plans</h1>
                  <p className='text-[#B4B5C1]' style={{fontFamily: 'Satoshi', fontWeight: "500px",fontSize: "16px", lineHeight: "24px"}}>A goal without a plan is just a wish</p>
            </div><br/>


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
                                        <div className="bg-[#265859] h-1" style={{width: "45%"}}></div>
                                    </div>  
                            </div>
                        </div>
                        
                    )
                } 
            </div><br/>

            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    NewPlans.map((NewPlan,i) => 

                        <div key={NewPlan.id} className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-lg border border-gray-200 shadow-md ">
                            <div className="relative flex flex-row space-x-4">
                                <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                                    <img src= {NewPlan.picture} alt="piggybank"/>
                                </div> 
                                <span><h2 className="text-sm pt-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>{NewPlan.name}</h2></span>
                            </div>

                            <div className='flex justify-end mt-2 text-[#265859]'>
                                <h2 className="" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>{NewPlan.create}</h2> 
                            </div>
                        </div>   
                    )
                } 
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border   border-gray-200 shadow-md bg-[#5B2E4F] text-white" style={{ backgroundImage: `url(${img1})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                        <div className="">
                            <h2 className="text-base font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "2i.6px"}}> Create a savings plan </h2>  
                            <p className="text-xs pb-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "10px", lineHeight: "13.5px"}}> Earn up to 12% </p> 
                        </div>
                </div> 

                <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border  border-gray-200 shadow-md bg-[#265859]" style={{ backgroundImage: `url(${img2})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                        <div className="">
                            <h2 className="text-sm font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "21.6px"}}> Invest in a </h2> 
                            <h2 className="text-sm font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "21.6px"}}>Female Farmer </h2>
                            <p className="text-xs pb-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "10px", lineHeight: "13.5px"}}> Get up to 25% returns per annum</p>
                            
                        </div>
                </div> 


                <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border   border-gray-200 shadow-md bg-[#F2F1F3]" style={{ backgroundImage: `url(${img3})`, backgroundSize: "", backgroundRepeat: "no-repeat", backgroundPosition: "right",}}>
                        <div className="">
                            <h2 className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "21.6px"}}> Invite your girls to  </h2> 
                            <h2 className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "16px", lineHeight: "21.6px"}}>HerVest </h2> 
                            <p className="text-xs pb-2" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "10px", lineHeight: "13.5px"}}> Share your girl code</p>
                            
                        </div>
                        <div className="mt-5">
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#E2698D] rounded-lg hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            HG7FIB   
                        </a>
                    
                        </div>
                </div> 

            </div>
        

        </div>
  
    </div>
    )
}


export default Dashboard