import axiosClient from './axios.interceptors';

// Khai báo type cho request params
type SignUpParams = {
    username: string
    email: string
    password: string
}

const AuthAPI = {
    // khai báo repository cho API đăng ký
    logup : (params: SignUpParams) => {
        const url = '/users/';
        return axiosClient.post(url, params);
    },
    // ...
};

export default AuthAPI;