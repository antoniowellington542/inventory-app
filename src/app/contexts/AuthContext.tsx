import { createContext, ReactNode, useCallback, useEffect, useState } from "react"

import { localStorageKeys } from "@/app/config/localStorageKeys"
import { useQuery } from "@tanstack/react-query"
import userService from "@/app/services/userService"
import toast from "react-hot-toast"

interface AuthContextProps {
  signedIn: boolean
  setSignedIn: (value: boolean) => void
  signin: (accessToken: string) => void
  signout: () => void
}
 
export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.USER_ACCESS_TOKEN)

    return !!storedAccessToken
  })

  const { isError } = useQuery({
    queryKey: ["users", "userId"],
    queryFn: async () => userService.retrieveOne(),
    enabled: signedIn,
    staleTime: 5000
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.USER_ACCESS_TOKEN, accessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.USER_ACCESS_TOKEN)

    setSignedIn(false)
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error("Sessao expirada")
      signout()
    }
  }, [isError, signout])

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        setSignedIn,
        signin,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}