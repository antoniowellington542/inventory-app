import httpClient from "@/app/services/httpClient"

type CreateUserInput = {
    email: string
    password: string
    name: string
}

type RetrieveOneUserOutput = {
    email: string
    name: string
    roleType: "user" | "admin"
}

class UserService {
    async create (input: CreateUserInput) {
        const { data } = await httpClient.post("/user", {
            input
        })
        
        return data
    }

    async retrieveOne (): Promise<RetrieveOneUserOutput> {
        const { data } = await httpClient.get<RetrieveOneUserOutput>("/user")
            
        return data
    }
}

export default new UserService()