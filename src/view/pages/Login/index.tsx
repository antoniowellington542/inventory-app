import { Link } from "react-router-dom"

import {
    Button,
    Input
} from "@/view/components"
import useLoginController from "@/view/pages/Login/useLoginController"

const Login = () => {
    const {
        handleSubmit,
        register,
        errors,
        isLoading
    } = useLoginController()

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-1/5">
                <header className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Entre em sua conta
                    </h1>

                    <p className="space-x-2">
                        <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
                        <Link
                            to="/register"
                            className="tracking-[-0.5px] font-medium text-yellow-600"
                        >
                            Crie uma conta
                        </Link>
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-14 flex flex-col gap-4"
                >
                    <Input
                        type="email"
                        placeholder="E-mail"
                        error={errors?.email?.message}
                        {...register("email")}
                    />

                    <Input
                        type="password"
                        placeholder="Senha"
                        error={errors?.password?.message}
                        {...register("password")}
                    />

                    <Button
                        type="submit"
                        name="Login"
                        className="mt-2"
                        isLoading={isLoading}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login