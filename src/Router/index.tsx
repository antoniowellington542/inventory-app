import React from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"

import Login from "@/view/pages/Login"
import Register from "@/view/pages/Register"
import AuthLayout from "@/view/layouts/AuthLayout"
import { useAuth } from "@/app/hooks/useAuth"
import Products from "@/view/pages/Products"
import ProductTransactions from "@/view/pages/ProductTransactions"
import Profile from "@/view/pages/Profile"
import PrivateLayout from "@/view/layouts/PrivateLayout"
import Dashboard from "@/view/pages/Dashboard"

interface AuthGuardProps {
    isPrivate: boolean
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
    const { isPrivate } = props

    const {
        signedIn
    } = useAuth()

    if (!signedIn && isPrivate) {
        return <Navigate to="/login" replace />
    }

    if (signedIn && !isPrivate) {
        return <Navigate to="/dashboard" replace />
    }

    return <Outlet />
}


const Router = () =>  {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Route>

                <Route element={<AuthGuard isPrivate={true}/>}>
                    <Route element={<PrivateLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product-transactions" element={<ProductTransactions />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router