import axios from "axios"

export const signUp = (signUpData) =>{
    return axios.post(`http://stageapi.hervest.ng/api/account/register`, {
        firstName: signUpData.firstname,
        lastName: signUpData.lastname,
        password: signUpData.password,
        phoneNumber: signUpData.phone,
        email: signUpData.email
    })
}

export const verifyEmail = (verifyEmailData) => {
    return axios.post(`http://stageapi.hervest.ng/api/account/verifyemail`, {
        code: verifyEmailData.code
    })
}

export const login = (loginData)=>{
    return axios.post("http://stageapi.hervest.ng/api/account/login", {
        email: loginData.email,
        password: loginData.password
    })
}

export const resetPassword = (resetPasswordData) =>{
    return axios.post(`http://stageapi.hervest.ng/api/account/reset_password`, {
        
        email: resetPasswordData.email
    })
} 

export const changePassword = (changePasswordData) => {
    return axios.post(`http://stageapi.hervest.ng/api/account/change_password`,{
        
            code : changePasswordData.code,
            password : changePasswordData.password, 
    })
}