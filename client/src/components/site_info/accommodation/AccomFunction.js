import axios from 'axios'

export const getAccomData = (accomId) => {
    return axios
        .post('./randomAccommodation', { 
            accomId: accomId
        })
        .then(response => {
            return response.data;
        })
}