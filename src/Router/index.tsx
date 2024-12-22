import React from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"

import Login from "@/view/pages/Login"
import Register from "@/view/pages/Register"
import Dashboard from "@/view/pages/Dashboard"
import AuthLayout from "@/view/layouts/AuthLayout"
import { useAuth } from "@/app/hooks/useAuth"
import Products from "@/view/pages/Products"

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
        return <Navigate to="/" replace />
    }

    return <Outlet />
}


const Router = () =>  {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Route>

                <Route element={<AuthGuard isPrivate={true}/>}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router