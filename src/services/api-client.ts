import axios, { AxiosRequestConfig } from 'axios';
import endpoints from './endpoints';

export interface FetchItemsResponse<U> {
    count: number;
    results: U[];
}

const apiClient = axios.create({
    baseURL: endpoints.baseUrl,
    params: {
        key: import.meta.env.VITE_API_KEY,
    },
});

export default class APIClient<T> {
    endpoint: string;

    constructor(_endpoint: string) {
        this.endpoint = _endpoint;
    }

    getAll = (config?: AxiosRequestConfig) =>
        apiClient
            .get<FetchItemsResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
}
