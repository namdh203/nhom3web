import axios from 'axios'

export const getTransList = (length, query) => {
    return axios
    .post('/tours/gettranslists', {
        length: length,
        query: query
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}