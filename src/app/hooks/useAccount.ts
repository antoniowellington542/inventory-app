import { useContext } from "react"
import { AccountContext } from "@/app/contexts/AccountContext"

export const useAccount = () => {
    return useContext(AccountContext)
}