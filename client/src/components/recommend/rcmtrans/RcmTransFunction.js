import axios from 'axios'

export const getTransList = (length) => {
    return axios
    .post('/tours/gettranslists', {
        length: length
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}