import axios from 'axios'

export const getActList = (length) => {
    return axios
    .post('/tours/getactlists', {
        length: length
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}