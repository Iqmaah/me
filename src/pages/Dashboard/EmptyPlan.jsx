import { Link } from "react-router-dom"
import piggybank from './../../assets/images/piggybank.png'
import Plus from './../../assets/images/Plus.png'

const EmptyPlan = () => {

    const NewPlans = [
        {
            "id" : "001",
            "name": "",
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
            "name": "Harvard MBA",
            "create": "Create this plan",
            "picture": [piggybank]
          }
      ]

    return(

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
          {
              NewPlans.map((NewPlan,i) => 
              <Link to="/CreatePlan">
                  <div key={NewPlan.id} className= "grid grid-rows-2 gap-4 pt-5 pr-5 pl-5  bg-white rounded-lg border border-gray-200 shadow-md ">
                      <div className="relative flex flex-row space-x-4">
                          <div className="bg-[#F4CDE0] rounded-full items-center p-4 ">
                              <img src= {NewPlan.picture} alt="piggybank"/>
                          </div> 
                          <span><h2 className="pt-2 text-[16px] font-[400px] leading-6">{NewPlan.name}</h2></span>
                      </div>

                      <div className='flex justify-end mt-2 text-[#265859]'>
                        <Link to="/CreatePlan"><h2 className="text-[16px] font-[400px] leading-6">{NewPlan.create}</h2></Link> 
                      </div>
                  </div> 
                </Link>     
              )
              
            }
         
        </div>
    )
}

export default EmptyPlan