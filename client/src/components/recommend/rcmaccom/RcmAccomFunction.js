import axios from 'axios'

export const getAccomList = (length) => {
    return axios
    .post('/tours/getaccomlists', {
        length: length
    })
    .then(response => {
        // console.log(response.data)
        return response.data
    })   
}