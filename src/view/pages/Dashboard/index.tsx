import { useAuth } from "@/app/hooks/useAuth"
import { Button } from "@/view/components"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const { signout } = useAuth()

    return (
        <div className="w-full h-full">
            <Button
                className="w-30"
                onClick={signout}
            >
                Logout
            </Button>


            <Button
                className="w-30 mt-10"
                onClick={() => {
                    navigate("/products")
                }}
            >
                Produtos
            </Button>
        </div>
    )
}

export default Dashboard