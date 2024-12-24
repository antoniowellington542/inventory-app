import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="flex w-full h-full">
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout