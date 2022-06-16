import axios, { AxiosRequestConfig } from "axios";

export const API_URL = "http://localhost:5000/auth";

// создаем экземпляр axios, который импортируется и с которым затем можно работать
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "token",
        )}`;
    }
    return config;
});

export default $api;
