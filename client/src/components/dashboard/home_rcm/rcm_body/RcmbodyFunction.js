import axios from 'axios'

export const getPopularCountry = () => {
    return axios
    .post('tours/getrandomcountry')
    .then(response => {
        return response.data
    })   
}

export const getMdRcmData = (country_id, tour_type) => {
    return axios
    .post('tours/gettourcountry', {
        id: country_id,
        type: tour_type
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}