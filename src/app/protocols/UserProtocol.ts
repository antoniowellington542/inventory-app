export type User = {
    id: number
    email: string
    name: string
    roleId: number
}

export type UserFormattedForConstruction = {
    id: number
    email: string
    name: string
    role: {
        id: number
        name: number
    }
}