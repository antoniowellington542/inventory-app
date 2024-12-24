import { Outlet } from "react-router-dom"
import SideBarLayout from "@/view/layouts/SideBarLayout"

const PrivateLayout = () => {
    return (
        <div className="w-full h-full">
            <SideBarLayout>
                <div>
                    <Outlet />
                </div>
            </SideBarLayout>
        </div>
    )
}

export default PrivateLayout