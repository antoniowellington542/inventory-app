import axios from "axios"

import { localStorageKeys } from "@/app/config/localStorageKeys"

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_APP_INVENTORY_API_URL
})

httpClient.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem(localStorageKeys.USER_ACCESS_TOKEN)

    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`
    }

    return request
})

export default httpClient