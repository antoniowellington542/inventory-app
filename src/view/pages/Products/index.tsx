import { Button, Input } from "@/view/components"
import {
    PlusCircledIcon
} from "@radix-ui/react-icons"
import useProductsController from "@/view/pages/Products/useProductsController"
import NewProductModal from "./modals/CreateProductModal"

const Products = () => {
    const {
        handleOpenCreateProductModal,
        handleCloseCreateProductModal,
        isCreateProductModalOpen,
        isLoading,
        products
    } = useProductsController()

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-1/6 bg-gray-50 flex justify-between items-center p-10">

                    <Input
                        name="search"
                        type="text"
                        placeholder="Buscar"
                        className="border-none"
                    />

                    <Button
                        className="bg-blue-500 h-10 gap-2 hover:bg-blue-400"
                        onClick={handleOpenCreateProductModal}
                    >
                        <PlusCircledIcon />

                        <span className="text-xs">Cadastrar novo produto</span>
                    </Button>
                </div>

                <div className="w-full h-full bg-gray-100 ">
                    <div className="p-6">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h1 className="text-lg font-semibold mb-4">Product List</h1>
                            <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border border-gray-200">
                                <thead>
                                <tr className="bg-gray-50">
                                    <th className="border px-4 py-2 text-left">Nome</th>
                                    <th className="border px-4 py-2 text-left">Categoria</th>
                                    <th className="border px-4 py-2 text-left">Quantidade</th>
                                    <th className="border px-4 py-2 text-left">Preco</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr className="hover:bg-gray-50" key={product.id}>
                                            <td className="border px-4 py-2">{product.name}</td>
                                            <td className="border px-4 py-2">{product.category.name}</td>
                                            <td className="border px-4 py-2">{product.quantity}</td>
                                            <td className="border px-4 py-2">{product.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewProductModal
                onClose={handleCloseCreateProductModal}
                open={isCreateProductModalOpen}
            />
        </div>
    )
}

export default Products