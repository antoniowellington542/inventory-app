import Input from "@/view/components/Input"
import InputCurrency from "@/view/components/InputCurrency"
import Modal from "@/view/components/Modal"
import Select from "@/view/components/Select"
import React, { useEffect } from "react"
import useCreateProductModalController from "@/view/pages/Products/modals/CreateProductModal/useCreateProductModalController"
import { Button } from "@/view/components"
import { Controller } from "react-hook-form"

interface NewProductModalProps {
    open: boolean
    onClose: () => void
}

const NewProductModal: React.FC<NewProductModalProps> = (props) => {
    const {
        open,
        onClose
    } = props

    const {
        errors,
        handleGetProductCategories,
        productCategories,
        handleSubmit,
        register,
        control,
        isLoading
    } = useCreateProductModalController()

    useEffect(() => {
        handleGetProductCategories()
    }, [])

    return (
        <Modal
            open={open}
            title="Cadastrar Produtos"
            onClose={onClose}
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
                    isLoading={isLoading}
                >
                    Criar Produto
                </Button>
            </form>
        </Modal>
    )
}

export default NewProductModal