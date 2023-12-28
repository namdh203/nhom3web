import axios from 'axios'

export const getFullProperty = () => {
    return axios
        .post('/users/admin/getCustomerProperties', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            throw error;
        });
}

export const addCustomer = (customer) => {
    return axios
        .post('/users/admin/addCustomer', {
            new_customer: customer
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            throw error;
        });
}

export const deleteCustomer = (customer) => {
    return axios
        .post('/users/admin/deleteCustomer', {
            old_customer: customer
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            throw error;
        });
}