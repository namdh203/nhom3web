import axios from 'axios'

export const getActList = (length, query) => {
    return axios
    .post('/tours/getactlists', {
        length: length,
        query: query
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}