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
        <Card>
            <CardHeader
                className="flex-row items-center justify-between"
            >
                <CardTitle>Produtos</CardTitle>
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
    )
}

export default Products