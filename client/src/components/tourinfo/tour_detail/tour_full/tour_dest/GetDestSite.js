import axios from 'axios'

export const getAccomSiteData = (destId) => {
    return axios.post('dest/accom', { destId: destId })
        .then(res => {
            return res.data;
        })
};

export const getTransSiteData = (destId) => {
    return axios.post('dest/transportation', { destId: destId })
        .then(res => {
            return res.data;
        })
};

export const getRestSiteData = (destId) => {
    return axios.post('dest/restaurant', { destId: destId })
        .then(res => {
            return res.data;
        })
};

export const getActSiteData = (destId) => {
    return axios.post('dest/activity', { destId: destId })
        .then(res => {
            return res.data;
        })
};

