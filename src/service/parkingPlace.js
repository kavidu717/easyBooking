import api from "../api/axios.js"

export const getAllPlaces=async()=>{

    const response= await api.get('/parking/all')
    return response.data
}