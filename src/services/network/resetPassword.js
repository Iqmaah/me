import axios from "axios"

export const resetPassword = (resetPasswordData) =>{
    return axios.post(`http://stageapi.hervest.ng/api/account/reset_password`, {
        
        email: resetPasswordData.email
    })
}    