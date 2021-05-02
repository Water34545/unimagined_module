import { ApiService as API } from '../services'

export const getProdictInfo = async data => {
    try {
        const response = await API.getProdictInfo(data)
        return response.data
    } catch (error) {
        console.error("getProdictInfo: " + error)
    }
}