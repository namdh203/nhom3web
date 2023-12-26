import axios from 'axios'

export const getAllTour = () => {
    return axios
        .post('/tours/admin/getAllTour', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            throw error;
        });
}
