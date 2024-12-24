import { ProductTransactionFormattedForConstruction } from "@/app/protocols/ProductTransactionProtocol"
import productTransactionService from "@/app/services/productTransactionService"
import { useQuery } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"

const useProductsTransactionController = () => {
    const {
        data = [],
        isFetching
    } = useQuery({
        queryKey: ["product-transactions"],
        queryFn: productTransactionService.retrieveAll
    })

    const columns: ColumnDef<ProductTransactionFormattedForConstruction>[] = [
        {
            accessorKey: "product",
            header: "Produto",
            cell: ({ row }) => {
                return row.original.product.name
            }
        },
        {
            accessorKey: "quantity",
            header: "Quantidade"
        },
        {
            accessorKey: "type",
            header: "Tipo da operacao",
            cell: ({ row }) => {
                const transactionTypeToTranslateType: Record<ProductTransactionFormattedForConstruction["type"], string> = {
                    add: "Entrada",
                    remove: "Saida"
                }

                return transactionTypeToTranslateType[row.original.type]
            }
        },
        {
            accessorKey: "totalPrice",
            header: "Preco"
        },
        {
            accessorKey: "createdAt",
            header: "Data de criacao"
        }
    ]

    return {
        productTransactions: data,
        isLoading: isFetching,
        columns
    }
}

export default useProductsTransactionController