/* export function Fetch(input: RequestInfo | URL, init?: RequestInit) {
    return fetch(input, init);
} */

import axios from 'axios'

export const Fetch = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL
});
