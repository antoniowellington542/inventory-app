import Router from "@/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "@/app/contexts/AuthContext"
import AccountProvider from "@/app/contexts/AccountContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

export function App () {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AuthProvider>
        <AccountProvider>
          <Router />
          <Toaster />
        </AccountProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}