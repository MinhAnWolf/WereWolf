import axios from 'axios';

axios.interceptors.request.use((config) => {
    if (config.url?.includes("/login") || config.url?.includes("/register")) {
        
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((reponse) => {
    return reponse;
}, (error) => {
    return Promise.reject(error)
})

export default axios;