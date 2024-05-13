import axiosClient from './axios.interceptors';

const DataAPI = {
    // khai báo repository cho API Data
    category : () => {
        const url = '/categories/';
        return axiosClient.get(url);
    },
    brand : () => {
        const url = '/brands/';
        return axiosClient.get(url);
    },
    // ...
};

export default DataAPI;