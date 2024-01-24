import axios, { AxiosRequestConfig } from 'axios';
import endpoints, { EndpointDetail } from './endpoints';

export interface FetchItemsResponse<U> {
    count: number;
    results: U[];
    next: string | null;
}

const apiClient = axios.create({
    baseURL: endpoints.baseUrl,
    params: {
        key: import.meta.env.VITE_API_KEY,
    },
});

export default class APIClient<T> {
    endpoint: string | EndpointDetail;

    constructor(_endpoint: string | EndpointDetail) {
        this.endpoint = _endpoint;
    }

    private getEndpoint(id?: string): string {
        if (typeof this.endpoint === 'function') {
            return (this.endpoint as EndpointDetail)(id!);
        }

        return this.endpoint as string;
    }

    getAll = (config?: AxiosRequestConfig) =>
        apiClient
            .get<FetchItemsResponse<T>>(this.getEndpoint(), config)
            .then((res) => res.data);

    get = (id: string) =>
        apiClient.get<T>(this.getEndpoint(id)).then((res) => res.data);
}
