import { Outlet } from "react-router-dom"
import SideBarMenu from "@/view/components/SideBarMenu"
import NavBar from "@/view/components/NavBar"

const PrivateLayout = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />

            <div className="h-full grid grid-cols-6">
                <div className="w-full h-full col-span-1">
                    <SideBarMenu />
                </div>

                <div className="w-full h-full col-span-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default PrivateLayout