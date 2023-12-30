import axios from 'axios'

export const getAllAccommodation = () => {
    return axios
        .post('/accommodation/admin/getAllAccommodation', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching accommodation data:', error);
            throw error;
        });
}

export const addAccommodation = (accommodation) => {
    return axios
        .post('/accommodation/admin/addAccommodation', {
            new_accommodation: accommodation
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching accommodation data:', error);
            throw error;
        });
}

export const deleteAccommodation = (accommodation) => {
    return axios
        .post('/accommodation/admin/deleteAccommodation', {
            old_accommodation: accommodation
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching accommodation data:', error);
            throw error;
        });
}