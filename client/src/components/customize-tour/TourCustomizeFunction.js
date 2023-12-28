import axios from 'axios'

export const getDestData = (itiList) => {
    return axios
    .post('/tours/getcustomdest', {itiList: itiList})
    .then(response => {
        return response.data
    })
}