import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import authService, { SigninRequestParams } from "@/app/services/authService"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useAuth } from "@/app/hooks/useAuth"

const loginZodSchema = z.object({
    email: z.string()
        .nonempty("E-mail obrigatorio")
        .email("Informe um e-mail valido"),
    password: z.string()
        .nonempty("Senha obrigatoria")
})

type LoginFormData = z.infer<typeof loginZodSchema>

const useLoginController = () => {
    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginZodSchema)
    })

    const {
        mutateAsync,
        isPending
    } = useMutation({
        mutationKey: ["signin"],
        mutationFn: async (data: SigninRequestParams) => {
            return authService.signin(data)
        }
    })

    const { signin } = useAuth()

    const handleSubmit = hookFormSubmit(async (data: LoginFormData) => {
        try {
            const { accessToken } = await mutateAsync(data)
            
            signin(accessToken)

            toast.success("Autenticado")
        } catch (error) {
            toast.error("Credenciais Invalidas!")
        }
    })

    return {
        handleSubmit,
        register,
        errors,
        isLoading: isPending
    }
}

export default useLoginController