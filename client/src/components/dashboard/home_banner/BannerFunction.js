import axios from 'axios'

export const getBannerData = (number) => {
    return axios
        .post('tours/getbesttour', { 
            number: number 
        })
        .then(response => {
            return response.data
        })
}