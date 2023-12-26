import axios from 'axios'

export const getFullProperty = (email) => {
    return axios
        .post('users/getCustomerProperties', { 
            email: email
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
}

export const updateCustomer = (user) => {
    return axios
        .post('users/updateCustomer', { 
            new_user: user
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
}