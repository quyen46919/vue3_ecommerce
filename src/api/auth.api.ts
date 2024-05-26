import axiosClient from './axios.interceptor';

interface SignInParams {
    username: string
    password: string
}
interface SignUpParams {
    username: string
    email: string
    password: string
}

const AuthAPI = {
    login: (body: SignInParams) => {
        const url = '/jwt/create/';
        return axiosClient.post(url, body);
    },
    logup: (body: SignUpParams) => {
        const url = '/users/';
        return axiosClient.post(url, body);
    },
    getProfile: () => {
        const url = '/users/me/';
        return axiosClient.get(url);
    },
};

export default AuthAPI;