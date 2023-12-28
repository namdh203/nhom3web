import axios from 'axios'

export const getRestList = (length, query) => {
    // console.log("length: ", length)
    return axios
    .post('/tours/getrestlists', {
        length: length,
        query: query
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}