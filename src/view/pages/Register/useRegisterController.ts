import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import authService, { SignupRequestParams } from "@/app/services/authService"
import { useAuth } from "@/app/hooks/useAuth"

const registerZodSchema = z.object({
    name: z.string()
        .nonempty("Nome obrigatorio")
        .max(32, "Nome nao pode ser maior que 32 caracteres"),
    email: z.string()
        .nonempty("E-mail obrigatorio")
        .email("Informe um e-mail valido"),
    password: z.string()
        .nonempty("Senha obrigatoria")
        .min(8, "Senha nao pode ser menor que 8 caracteres")
})

type RegisterFormData = z.infer<typeof registerZodSchema>

const useRegisterController = () => {
    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerZodSchema)
    })

    const {
        mutateAsync,
        isPending
    } = useMutation({
        mutationKey: ["signup"],
        mutationFn: async (data: SignupRequestParams) => {
            return await authService.signup(data)
        }
    })

    const { signin } = useAuth()

    const handleSubmit = hookFormSubmit(async (data: RegisterFormData) => {
        try {
            const { accessToken } = await mutateAsync(data)

            signin(accessToken)
            
            toast.success("Usuario criado")
        } catch (error) {
            toast.error("Ocorreu um erro ao criar sua conta")
        }
    })

    return {
        handleSubmit,
        register,
        errors,
        isLoading: isPending
    }
}

export default useRegisterController