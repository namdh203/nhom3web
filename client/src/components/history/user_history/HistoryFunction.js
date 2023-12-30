import axios from 'axios'

export const getAllPayment = (id) => {
    return axios
        .post('/payments/getAllPayment', {
            id: id
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            throw error;
        });
}