import axios from 'axios'

export const getAllActivity = () => {
    return axios
        .post('/activity/admin/getAllActivity', {})
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching activity data:', error);
            throw error;
        });
}

export const addActivity = (activity) => {
    return axios
        .post('/activity/admin/addActivity', {
            new_activity: activity
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching activity data:', error);
            throw error;
        });
}

export const deleteActivity = (activity) => {
    return axios
        .post('/activity/admin/deleteActivity', {
            old_activity: activity
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.error('Error fetching activity data:', error);
            throw error;
        });
}