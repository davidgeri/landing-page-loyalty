import axios, { type AxiosRequestConfig } from "axios"
import { ref } from "vue"

export const HandleFetchApi = async (url: string, option: AxiosRequestConfig = {}) => {
    const error = ref<Error | null>(null)
    const response = ref<unknown>(null)

    try {
        const res = await axios({
            url,
            method: option.method || "GET",
            headers: option.headers || {},
            data: option.data ?? null
        })

        response.value = res.data
        return { response, error }
    } catch (err) {
        error.value = err instanceof Error ? err : new Error("Request failed")
        return { response, error }
    }
}