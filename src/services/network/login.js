import axios from "axios"

export const login = (loginData)=>{
    return axios.post("http://stageapi.hervest.ng/api/account/login", {
        email: loginData.email,
        password: loginData.password
    })
}