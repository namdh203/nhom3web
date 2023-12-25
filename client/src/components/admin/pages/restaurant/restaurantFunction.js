import axios from 'axios'

export const getAllRestaurant = () => {
    return axios
        .post('/restaurant/admin/getAllRestaurant', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching restaurant data:', error);
            throw error;
        });
}
