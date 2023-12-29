import axios from 'axios'

export const getAllActivity = () => {
    return axios
        .post('/activity/admin/getAllActivity', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching activity data:', error);
            throw error;
        });
}
