import axios from 'axios'

export const getTourData = (id) => {
    return axios
    .post('tours/getspecifictour', {id: id})
    .then(response => {
        return response.data
    })   
}

export const getDestData = (id) => {
    return axios
    .post('tours/getdestdata', {id: id})
    .then(response => {
        return response.data
    })
}