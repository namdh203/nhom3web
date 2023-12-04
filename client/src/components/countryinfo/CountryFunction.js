import axios from 'axios'

export const getCountryData = (id) => {
    return axios
    .post('tours/getspecificcountry', {id: id})
    .then(response => {
        return response.data
    })   
}


export const getTourData = (id) => {
    return axios
    .post('tours/gettourcountry_more', {id: id})
    .then(response => {
        return response.data
    })
}