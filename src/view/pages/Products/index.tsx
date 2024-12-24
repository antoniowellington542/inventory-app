import useProductsController from "@/view/pages/Products/useProductsController"
import CreateProductModal from "./modals/CreateProductModal"

import { DataTable } from "@/components/DataTable"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Products = () => {
    const {
        products,
        tableColumns
    } = useProductsController()

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <CardHeader
                    className="flex flex-row justify-between items-center"
                >
                    <CardTitle className="text-xl">Produtos</CardTitle>
                    <div className="flex justify-between">
                        <div />
                        <div className="flex-nowrap">
                            <CreateProductModal />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <DataTable
                        columns={tableColumns}
                        data={products}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default Products