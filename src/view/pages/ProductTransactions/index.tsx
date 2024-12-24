import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CreateProductTransactionModal from "./modals/CreateProductModal"
import useProductTransactionsController from "./useProductTransactionsController"
import { DataTable } from "@/components/DataTable"

const ProductTransactions = () => {
    const {
        productTransactions,
        columns
    } = useProductTransactionsController()

    return (
        <Card>
            <CardHeader
                className="flex-row items-center justify-between"
            >
                <CardTitle>Transacoes de Produtos</CardTitle>
                <div className="flex justify-between">
                    <div />
                    <div className="flex-nowrap">
                        <CreateProductTransactionModal />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <DataTable
                    columns={columns}
                    data={productTransactions}
                />
            </CardContent>
        </Card>
    )
}

export default ProductTransactions