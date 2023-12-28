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

export const addTour = (tour) => {
    return axios
        .post('/tours/admin/addTour', {
            new_tour : tour
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
