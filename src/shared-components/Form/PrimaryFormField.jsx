const PrimaryFormField = ({type, placeholder, onChange, value, ...props}) => {

    return (
        <input
            type={type || "text"}
            required
            value={value}
            className="appearance-none rounded-2xl relative block w-full
             px-3 py-3 text-[14px] font-[300px] leading-5 border border-gray-300 placeholder-gray-500
             text-gray-900 hover:border-[#D43E8A] focus:outline-none focus:ring-[#D43E8A]
              focus:border-[#D43E8A] focus:z-10 sm:text-sm"
            placeholder={placeholder || "Fill in the details"}
            onChange={onChange}
            {...props}
        />
                    
    )
}

export default PrimaryFormField