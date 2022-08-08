import axios from "axios";
const base_URL = 'http://stageapi.hervest.ng/api'
// const token = localStorage.getItem('HVST_TOKEN')
//const token = "NcPBdwq7xT4F8Gxbax8gL2AM/tDQv7yzU3WGUbeX+wNRcQ6g9jDuQLSSOm77jlYyoW/5kzYAiggCalprr1Y4f8vneIU1kqyKyKYSvF0zjb1eomqLkSc+BZAW2g0xiOLWuCQVW/uXnEv29dWESOcSOJg="
const token = localStorage.getItem("token")

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
}

export const GETwithTOKEN = (URI) => {
    console.log('CALLED AXIOS');
    return axios.get(base_URL+URI, {headers})
}

export const POSTwithoutTOKEN = (URI, data) => {
    console.log('CALLED AXIOS');
    console.log(data);
    return axios.post(base_URL+URI, data)
}


export const POSTwithTOKEN = (URI, data) => {
    console.log(data)
    return axios.post(base_URL + URI, {headers})
}