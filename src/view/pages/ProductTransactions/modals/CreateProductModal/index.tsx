import Input from "@/components/Input"
import InputCurrency from "@/components/InputCurrency"
import Select from "@/components/Select"
import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Controller } from "react-hook-form"
import useCreateProductTransactionModalController from "./useCreateProductTransactionModalController"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"

const CreateProductTransactionModal = () => {
    const {
        errors,
        handleGetProductCategories,
        productCategories,
        handleSubmit,
        register,
        control
    } = useCreateProductTransactionModalController()

    useEffect(() => {
        handleGetProductCategories()
    }, [])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    variant="default"
                >
                    <CirclePlus /> Criar transacao
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Cadastrar Produtos
                    </DialogTitle>
                </DialogHeader>

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
                        size="lg"
                        className="w-full"
                    >
                        Criar Produto
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateProductTransactionModal