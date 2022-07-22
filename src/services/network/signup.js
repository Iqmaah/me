import axios from "axios"

export const signup = (signUpData) =>{
    return axios.post(`http://stageapi.hervest.ng/api/account/register`, {
        firstName: signUpData.firstname,
        lastName: signUpData.lastname,
        password: signUpData.password,
        phoneNumber: signUpData.phone,
        email: signUpData.email
    })
}