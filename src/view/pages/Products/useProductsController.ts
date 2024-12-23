import productService from "@/app/services/productService"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const useProductsController = () => {
    const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState<boolean>(false)

    const handleOpenCreateProductModal = async () => {
        setIsCreateProductModalOpen(true)
    }

    const handleCloseCreateProductModal = () => {
        setIsCreateProductModalOpen(false)
    }

    const {
        data = [],
        isFetching
    } = useQuery({
        queryKey: ["products"],
        queryFn: productService.retrieveAll
    })

    return {
        handleCloseCreateProductModal,
        handleOpenCreateProductModal,
        isCreateProductModalOpen,
        products: data,
        isLoading: isFetching
    }
}

export default useProductsController