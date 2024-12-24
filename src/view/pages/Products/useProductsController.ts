import productService, { Product } from "@/app/services/productService"
import { useQuery } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"

const useProductsController = () => {
    const {
        data = [],
        isFetching
    } = useQuery({
        queryKey: ["productTransactions"],
        queryFn: productService.retrieveAll
    })

    const columns: ColumnDef<Product>[] = [
        {
            accessorKey: "name",
            header: "Nome"
        },
        {
            accessorKey: "category",
            header: "Categoria",
            cell: ({ row }) => {
                return row.original.category.name
            }
        },
        {
            accessorKey: "price",
            header: "Preco"
        },
        {
            accessorKey: "quantity",
            header: "Quantidade"
        }
    ]

    return {
        products: data,
        isLoading: isFetching,
        tableColumns: columns
    }
}

export default useProductsController