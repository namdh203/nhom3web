import axios from 'axios'

export const getActivityData = (activityId) => {
    return axios
        .post('./randomAct', { 
            activityId: activityId
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log("Error fetching data: " + error);
            return error;
        })
}