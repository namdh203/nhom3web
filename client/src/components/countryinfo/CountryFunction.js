import axios from 'axios'

export const getCountryData = (id) => {
    return axios
    .post('tours/getspecificcountry', {id: id})
    .then(response => {
        return response.data
    })   
}


export const getTourData = (id, type) => {
    return axios
    .post('tours/gettourcountry_more', {id: id, type: type})
    .then(response => {
        return response.data
    })
}