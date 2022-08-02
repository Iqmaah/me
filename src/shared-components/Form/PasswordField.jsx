import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordField = (inputData) => {
    const [password, setPassword] = useState("")
    const [passwordShown, SetpasswordShown] = useState("")
    return (

        <div className='relative'>
            <input
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                minLength="6"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required
                className="appearance-none relative block w-full  px-3 py-3 text-[14px] font-[300px] leading-5 bg-[#F8F1F6] placeholder-[#33343D]
                text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                {passwordShown ? (
                    <FaEye
                        onClick={() => SetpasswordShown(false)}
                        className="text-right"
                    />
                ) : (
                    <FaEyeSlash
                        onClick={() => SetpasswordShown(true)}
                        className="text-right"
                    />
                )}
            </div>
        </div>
    )
}


export default PasswordField