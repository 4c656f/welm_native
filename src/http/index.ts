import axios from 'axios'

export const API_URL = "http://api.welm.io"

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


api.interceptors.request.use((config) => {

    config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }


    return config
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            // const response = await axios.post<AuthResponse>(`${API_URL}/refresh`, {}, {withCredentials: true})
            //
            // localStorage.setItem("token", response.data.tokens.access_token)
            return api.request(originalRequest);
        } catch (e) {
            console.log("пользователь не авторизован interceptor", e)

        }

    }
    throw error
})

export default api;