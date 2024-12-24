import Input from "@/components/Input"
import InputCurrency from "@/components/InputCurrency"
import Modal from "@/components/Modal"
import Select from "@/components/Select"
import { useEffect } from "react"
import useCreateProductModalController from "@/view/pages/Products/modals/CreateProductModal/useCreateProductModalController"
import { Button } from "@/components/ui/button"
import { Controller } from "react-hook-form"
import { CirclePlus } from "lucide-react"

const CreateProductModal = () => {
   const {
        errors,
        handleGetProductCategories,
        productCategories,
        handleSubmit,
        register,
        control,
        isCreateProductModalOpen,
        handleOpenCreateProductModal,
        handleCloseCreateProductModal
    } = useCreateProductModalController()

    useEffect(() => {
        handleGetProductCategories()
    }, [])

    return (
        <Modal
            title="Cadastrar Produtos"
            actionTrigger={(
                <Button
                    size="lg"
                    variant="default"
                    onClick={handleOpenCreateProductModal}
                >
                    <CirclePlus /> Criar Produto
                </Button>
            )}
            open={isCreateProductModalOpen}
            onClose={handleCloseCreateProductModal}
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <span className="text-gray-600 tracking-[-0.5px] text-xs">Valor unitario</span>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
                        <Controller
                            control={control}
                            name="price"
                            defaultValue="0"
                            render={({ field: { onChange, value }}) => (
                                <InputCurrency
                                    error={errors?.price?.message}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Input
                        type="text"
                        placeholder="Nome"
                        error={errors?.name?.message}
                        {...register("name")}
                    />

                    <Input
                        type="number"
                        placeholder="Quantidade"
                        error={errors?.quantity?.message}
                        {...register("quantity")}
                        defaultValue={0}
                    />

                    <Controller
                        control={control}
                        name="categoryId"
                        render={({ field: { onChange }}) => (
                            <Select
                                placeholder="Selecione uma categoria"
                                options={productCategories.map(category => ({
                                    label: category.name,
                                    value: String(category.id)
                                }))}
                                onChange={onChange}
                                error={errors?.categoryId?.message}
                            />
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full mt-6"
                >
                    Criar Produto
                </Button>
            </form>
        </Modal>
    )
}

export default CreateProductModal