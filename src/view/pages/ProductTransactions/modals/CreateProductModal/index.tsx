import Input from "@/components/Input"
import InputCurrency from "@/components/InputCurrency"
import Select from "@/components/Select"
import { Button } from "@/components/ui/button"
import { Controller } from "react-hook-form"
import useCreateProductTransactionModalController from "./useCreateProductTransactionModalController"
import { CirclePlus } from "lucide-react"
import Modal from "@/components/Modal"
import { ProductTransactionFormattedForConstruction } from "@/app/protocols/ProductTransactionProtocol"

const CreateProductTransactionModal = () => {
	const {
		errors,
		handleSubmit,
		register,
		control,
		handleCloseCreateProductTransactionModal,
		handleOpenCreateProductTransactionModal,
		isCreateProductTransactionModalOpen,
		products
	} = useCreateProductTransactionModalController()

	return (
		<Modal
			title="Alterar Estoque"
			actionTrigger={(
				<Button
					size="lg"
					variant="default"
					className="rounded-xl"
					onClick={handleOpenCreateProductTransactionModal}
				>
					<CirclePlus /> Criar transacao
				</Button>
			)}
			open={isCreateProductTransactionModalOpen}
			onClose={handleCloseCreateProductTransactionModal}
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
						<Controller
							control={control}
							name="productId"
							render={({ field: { onChange }}) => (
								<Select
									placeholder="Selecione um produto"
									options={products.map(product => ({
										label: product.name,
										value: String(product.id)
									}))}
									onChange={onChange}
									error={errors?.productId?.message}
								/>
							)}
						/>

						<Controller
							control={control}
							name="transactionType"
							render={({ field: { onChange }}) => (
								<Select
									placeholder="Tipo da transacao"
									options={(["add", "remove"] as ProductTransactionFormattedForConstruction["type"][]).map(type => {
										const transactionTypeToTranslateType: Record<ProductTransactionFormattedForConstruction["type"], string> = {
											add: "Entrada",
											remove: "Saida"
										}
										
										return {
											label: transactionTypeToTranslateType[type],
											value: String(type)
										}
									})}
									onChange={onChange}
									error={errors?.transactionType?.message}
								/>
							)}
						/>

						<Input
							type="number"
							placeholder="Quantidade"
							error={errors?.quantity?.message}
							{...register("quantity")}
							defaultValue={1}
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
		</Modal>
	)
}

export default CreateProductTransactionModal