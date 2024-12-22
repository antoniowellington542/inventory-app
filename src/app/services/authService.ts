import httpClient from "@/app/services/httpClient"
import { sleep } from "../utils/sleepUtil"

export interface SigninRequestParams {
    email: string
    password: string
}

export interface SignupRequestParams {
    email: string
    password: string
    name: string
}

interface SignupResponse {
    accessToken: string
}

interface SigninResponse {
    accessToken: string
}

class AuthService {
    async signin (params: SigninRequestParams): Promise<SigninResponse> {
        await sleep()

        const { data } = await httpClient.post<SigninResponse>("/signin", params)
            
        return data
    }

    async signup (params: SignupRequestParams): Promise<SignupResponse> {
        await sleep()

        const { data } = await httpClient.post<SignupResponse>("/signup", params)

        return data
    }
}

export default new AuthService()