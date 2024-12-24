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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <CardHeader
                    className="flex-row items-center justify-between"
                >
                    <CardTitle className="text-xl">Transacoes de Produtos</CardTitle>
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
        </div>
    )
}

export default ProductTransactions