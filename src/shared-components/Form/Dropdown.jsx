
const Dropdown = ({ placeholder, onChange, valueArr }) => {
  
    return(
        <select 
            required
            style={{fontFamily: 'Satoshi', fontWeight: "300px",fontSize: "14px", lineHeight: "18px"}} className="form-select appearance-none block w-full px-3 py-3 text-gray-700 bg-white bg-clip-padding bg-no-repeat
             border border-solid border-gray-300 rounded-xl transition ease-in-out m-0
            hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A] focus:border-[#D43E8A] focus:bg-white focus:z-10" aria-label="Default select example "
            placeholder={placeholder || "Fill in the details"} 
            onChange={onChange}
            >
            <option value='' >{placeholder || "Select an item"}</option>
            {
                Array.isArray(valueArr) ?
                         valueArr.map((data, i) =>   <option key={i} value={data}>{data}</option>)
               : null
            }
            
           
           {/* <option value="A">Apple</option>
  <option value="B">Banana</option>
  <option value="C">Cranberry</option> */}
   
        </select>
    )
}


export default Dropdown