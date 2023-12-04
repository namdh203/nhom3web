import axios from 'axios'

export const getRestData = (restId) => {
    return axios
        .post('./randomRestaurant', { 
            restId: restId
        })
        .then(response => {
            return response.data;
        })
}