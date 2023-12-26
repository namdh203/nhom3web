import axios from 'axios'

export const getAllTransportation = () => {
    return axios
        .post('/transportations/admin/getAllTransportation', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching transportation data:', error);
            throw error;
        });
}
