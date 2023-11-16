import axios from 'axios'

export const getTourData = (id) => {
    return axios
    .post('tours/getspecifictour', {id: id})
    .then(response => {
        return response.data
    })   
}