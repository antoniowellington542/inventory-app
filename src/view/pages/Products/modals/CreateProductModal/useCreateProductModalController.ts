import productCategoryService, { ProductCategory } from "@/app/services/productCategoryService"
import productService, { CreateProductInput } from "@/app/services/productService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

const createProductZodSchema = z.object({
    name: z.string()
        .nonempty("Nome do produto obrigatorio")
        .max(64, "Nome nao pode ser maior que 64 caracteres"),
    price: z.string().nonempty("Valor do produto nao pode ser vazio"),
    quantity: z.coerce.number().nonnegative(),
    categoryId: z.string({ required_error: "Categoria nao pode ser vazia" }).nonempty()
})

type CreateProductFormData = z.infer<typeof createProductZodSchema>

const useCreateProductModalController = () => {
    const [productCategories, setProductCategories] = useState<Array<ProductCategory>>([])

    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors },
        control,
        reset
    } = useForm<CreateProductFormData>({
        resolver: zodResolver(createProductZodSchema),
        defaultValues: {
            quantity: 0,
            price: "0"
        }
    })

    const queryClient = useQueryClient()

    const handleGetProductCategories = async () => {
        try {
            const response = await productCategoryService.retrieveAll()
                
            setProductCategories(response.productCategories)
        } catch (error) {
            toast.error("Houve um problema ao carregar as categorias dos produtos")
        }
    }

    const {
        mutateAsync,
        isPending
    } = useMutation({
        mutationKey: ["signin"],
        mutationFn: async (data: CreateProductInput) => {
            return productService.create(data)
        }
    })

    const handleSubmit = hookFormSubmit(async (data: CreateProductFormData) => {
        try {
            await mutateAsync({
                name: data.name,
                categoryId: parseInt(data.categoryId),
                price: parseFloat(data.price),
                quantity: data.quantity
            })

            queryClient.invalidateQueries({ queryKey: ["products"]})

            toast.success("Produto criado com sucesso")

            reset()
        } catch (error) {
            console.log(error)

            toast.error("Erro ao criar produto")
        }
    })

    return {
        handleSubmit,
        handleGetProductCategories,
        productCategories,
        register,
        errors,
        control,
        isLoading: isPending
    }
}

export default useCreateProductModalController