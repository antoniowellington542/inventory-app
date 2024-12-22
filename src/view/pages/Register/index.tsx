import {
    Button,
    Input
} from "@/view/components"

import useRegisterController from "@/view/pages/Register/useRegisterController"

const Register = () => {
    const {
        errors,
        handleSubmit,
        register,
        isLoading
    } = useRegisterController()

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-1/5">
                <header className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Crie sua conta
                    </h1>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-14 flex flex-col gap-4"
                >
                    <Input
                        type="text"
                        placeholder="Nome"
                        error={errors?.name?.message}
                        {...register("name")}
                    />

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
                        className="mt-2"
                        isLoading={isLoading}
                    >
                        Registrar
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Register