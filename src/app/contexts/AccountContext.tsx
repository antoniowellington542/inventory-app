import { createContext, ReactNode, useEffect, useState } from "react"
import { UserFormattedForConstruction } from "@/app/protocols/UserProtocol"
import { useAuth } from "../hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"
import userService from "../services/userService"

type AccountContextProps = {
  userData: UserFormattedForConstruction | null
  setUserData: (userData: UserFormattedForConstruction) => void
  isLoading: boolean
}
 
export const AccountContext = createContext({} as AccountContextProps)

const AccountProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<UserFormattedForConstruction | null>(null)

    const {
        signedIn,
        signout
    } = useAuth()

    const {
        isError,
        data,
        isFetching
    } = useQuery({
        queryKey: ["user"],
        queryFn: async () => userService.retrieveOne(),
        enabled: signedIn,
        staleTime: 5000
    })

      useEffect(() => {
        if (isError) {
          toast.error("Sessao expirada")
          signout()
        }

        if (data) {
            setUserData(data)
        }
      }, [isError, signout, data])

    return (
        <AccountContext.Provider
            value={{
                userData,
                setUserData,
                isLoading: isFetching || userData === null
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider