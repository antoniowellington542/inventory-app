import {
    DashboardIcon,
    ArchiveIcon,
    ReaderIcon,
    PersonIcon
} from "@radix-ui/react-icons"
import Button from "@/components/Button"
import { useAuth } from "@/app/hooks/useAuth"
import ListItemMenu from "@/components/ListItemMenu"

const SideBarMenu = () => {
    const { signout } = useAuth()
    
    return (
        <div className="w-full h-full bg-gray-50 border-r-[1px] border-gray-400">
            <div className="h-full flex flex-col justify-between p-5">
                <div className="flex flex-col gap-6">
                    <h1 className="text-xs text-gray-600 font-bold">General</h1>

                    <div className="w-full">
                        <ul className="flex flex-col gap-4">
                            <ListItemMenu
                                icon={<DashboardIcon />}
                                name="Dashboard"
                                destinyRoute="dashboard"
                            />
                            <ListItemMenu
                                icon={<ArchiveIcon />}
                                name="Produtos"
                                destinyRoute="products"
                            />
                            <ListItemMenu
                                icon={<ReaderIcon />}
                                name="Transacoes"
                                destinyRoute="transactions"
                            />

                            <ListItemMenu
                                icon={<PersonIcon />}
                                name="Perfil"
                                destinyRoute="profile"
                            />
                        </ul>
                    </div>
                </div> 

                <Button
                    className="bg-red-600 hover:bg-red-400"
                    onClick={signout}
                >
                    Logout
                </Button>  
            </div>
        </div>
    )
}

export default SideBarMenu