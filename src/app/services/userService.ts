import httpClient from "@/app/services/httpClient"
import { UserFormattedForConstruction } from "@/app/protocols/UserProtocol"
import { sleep } from "../utils/sleepUtil"

type CreateUserInput = {
    email: string
    password: string
    name: string
}

type RetrieveOneUserOutput = {
    user: UserFormattedForConstruction
}

class UserService {
    async create (input: CreateUserInput) {
        const { data } = await httpClient.post("/user", {
            input
        })
        
        return data
    }

    async retrieveOne (): Promise<UserFormattedForConstruction> {
        await sleep()

        const { data } = await httpClient.get<RetrieveOneUserOutput>("/user")
            
        return data.user
    }
}

export default new UserService()