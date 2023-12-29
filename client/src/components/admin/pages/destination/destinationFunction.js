import axios from 'axios'

export const getAllDestination = () => {
    return axios
        .post('/destinations/admin/getAllDestination', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching destination data:', error);
            throw error;
        });
}
