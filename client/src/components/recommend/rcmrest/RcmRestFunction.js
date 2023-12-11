import axios from 'axios'

export const getRestList = (length) => {
    // console.log("length: ", length)
    return axios
    .post('/tours/getrestlists', {
        length: length
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}