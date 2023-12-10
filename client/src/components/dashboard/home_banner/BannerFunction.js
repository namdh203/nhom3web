import axios from 'axios'

export const getBannerData = (number, type) => {
    return axios
        .post('tours/getbesttour', { 
            number: number,
            type: type
        })
        .then(response => {
            return response.data
        })
}