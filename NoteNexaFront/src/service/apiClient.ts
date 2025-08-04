import axios from "axios";
import { getToken } from "../util/cookies";
export const BS_BASE_URL = "http://localhost:3000/api";

export const apiClient_1 = axios.create({
    baseURL:BS_BASE_URL,
    headers:{
        "Content-Type": "application/json",
    },
})


export const apiClient_2 = axios.create({
    baseURL:BS_BASE_URL,
    headers:{
        "Content-Type": "application/json",
    }
})

apiClient_2.interceptors.request.use((config) => {
    const token = getToken();
    const cleanToken = token ? token.replace(/"/g, "") : "";
    if (cleanToken) {
        config.headers["Authorization"] = `Bearer ${cleanToken}`;
    }
    return config;
});