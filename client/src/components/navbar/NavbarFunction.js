import axios from 'axios'

export const getCustomer = (email) => {
    return axios
        .post('users/getCustomer', { 
            email: email
        })
        .then(response => {
            // console.log(response.data)
            return response.data
        })
}