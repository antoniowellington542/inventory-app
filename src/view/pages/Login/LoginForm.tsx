import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Input from "@/components/Input"
import React from "react"
import useLoginController from "./useLoginController"
import Spinner from "@/components/Spinner"
import { Link } from "react-router-dom"

const LoginForm: React.FC<React.ComponentPropsWithoutRef<"div">> = (props) => {
    const {
        className
    } = props

    const {
        errors,
        handleSubmit,
        isLoading,
        register
    } = useLoginController()

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Bem vindo</CardTitle>

                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Input
                                        type="email"
                                        {...register("email")}
                                        placeholder="Email"
                                        error={errors?.email?.message}    
                                    />
                                </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-4 hover:underline"
                                    >
                                        Esqueci minha senha?
                                    </a>
                                </div>
                                <Input
                                    placeholder="Senha"
                                    error={errors?.password?.message}
                                    type="password"
                                    {...register("password")}    
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                {isLoading ? <Spinner /> : "Login"}
                            </Button>
                            </div>
                            <div className="text-center text-sm">
                                Nao tem uma conta?{" "}
                                <Link to="/register" className="underline underline-offset-4">
                                    Cadastre-se
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginForm
