import { CreateProductTransactionInput } from "@/app/protocols/ProductTransactionProtocol"
import { Product } from "@/app/services/productService"
import productTransactionService from "@/app/services/productTransactionService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const createProductTransactionZodSchema = z.object({
    transactionType: z.enum(["add", "remove"], { required_error: "Tipo da transacao nao pode ser vazio" }),
    price: z.string().nonempty("Valor do produto nao pode ser vazio"),
    quantity: z.coerce.number().nonnegative(),
    productId: z.string({ required_error: "Produto nao pode ser vazio" }).nonempty()
})

type CreateProductTransactionFormData = z.infer<typeof createProductTransactionZodSchema>

const useCreateProductTransactionModalController = () => {
    const [isCreateProductTransactionModalOpen, setIsCreateProductTransactionModalOpen] = useState<boolean>(false)

    const handleOpenCreateProductTransactionModal = () => {
        setIsCreateProductTransactionModalOpen(true)
    }

    const handleCloseCreateProductTransactionModal = () => {
        setIsCreateProductTransactionModalOpen(false)
    }

    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors },
        control,
        reset
    } = useForm<CreateProductTransactionFormData>({
        resolver: zodResolver(createProductTransactionZodSchema),
        defaultValues: {
            quantity: 1,
            price: "0"
        }
    })

    const queryClient = useQueryClient()

    const {
        mutateAsync,
        isPending
    } = useMutation({
        mutationKey: ["create-product-transaction"],
        mutationFn: async (data: CreateProductTransactionInput) => {
            return productTransactionService.create(data)
        }
    })

    const handleSubmit = hookFormSubmit(async (data: CreateProductTransactionFormData) => {
        try {
            await mutateAsync({
                transactionType: data.transactionType,
                productId: parseInt(data.productId),
                price: parseFloat(data.price),
                quantity: data.quantity
            })

            queryClient.invalidateQueries({ queryKey: ["product-transactions"]})

            toast.success("Operacao realizada com sucesso")

            reset()
        } catch (error) {
            console.log(error)

            toast.error("Erro ao realizar operacao no estoque")
        }
    })

    return {
        handleSubmit,
        register,
        errors,
        control,
        isLoading: isPending,
        handleCloseCreateProductTransactionModal,
        handleOpenCreateProductTransactionModal,
        isCreateProductTransactionModalOpen,
        products: queryClient.getQueryData<Array<Product>>(["products"]) || []
    }
}

export default useCreateProductTransactionModalController