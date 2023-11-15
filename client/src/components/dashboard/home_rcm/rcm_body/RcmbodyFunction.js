import axios from 'axios'

export const getPopularCountry = () => {
    return axios
    .post('tours/getrandomcountry')
    .then(response => {
        return response.data
    })   
}

export const getMdRcmData = country_id => {
    return axios
    .post('tours/gettourcountry', {
        id: country_id
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}

export const getPopularCountry2 = () => {
    return axios
    .post('tours/getrandomcountry2')
    .then(response => {
        return response.data
    })   
}

export const getMdRcmData2 = country_id => {
    return axios
    .post('tours/gettourcountry2', {
        id: country_id
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}