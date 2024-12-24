import { Outlet } from "react-router-dom"
import SideBarLayout from "@/view/layouts/SideBarLayout"
import { useAccount } from "@/app/hooks/useAccount"
import Spinner from "@/components/Spinner"

const PrivateLayout = () => {
    const {
        isLoading
    } = useAccount()

    return (
        <div className="w-full h-full overflow-hidden">
            {isLoading ? (
                <div
                    className="w-full h-full flex items-center justify-center"
                >
                    <Spinner />
                </div>
            ) : (
                <SideBarLayout>
                    <div className="w-full h-full">
                        <Outlet />
                    </div>
                </SideBarLayout>
            )}
        </div>
    )
}

export default PrivateLayout