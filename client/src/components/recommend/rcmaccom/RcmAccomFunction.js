import axios from 'axios'

export const getAccomList = (length, query) => {
    return axios
    .post('/tours/getaccomlists', {
        length: length,
        query: query
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}