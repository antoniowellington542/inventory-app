import { createContext, ReactNode, useCallback, useState } from "react"

import { localStorageKeys } from "@/app/config/localStorageKeys"

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

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.USER_ACCESS_TOKEN, accessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.USER_ACCESS_TOKEN)

    setSignedIn(false)
  }, [])

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