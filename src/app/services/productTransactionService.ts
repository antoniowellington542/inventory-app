import httpClient from "@/app/services/httpClient"

export interface ProductTransaction {
    id: number
    productId: string
    quantity: number
    type: "add" | "remove"
    totalPrice: number
    createdAt: Date
    updatedAt: Date
}

export interface ProductTransactionFormattedForConstruction {
    id: number
    product: {
        id: number
        name: string
    }
    quantity: number
    type: "add" | "remove"
    totalPrice: number
    createdAt: Date
}

interface RetrieveProductTransactionOutput {
    productTransactions: Array<ProductTransactionFormattedForConstruction>
}

export interface CreateProductTransactionInput {
    transactionType: ProductTransaction["type"]
    quantity: ProductTransaction["quantity"]
    productId: number
    price: ProductTransaction["totalPrice"]
}


class ProductTransactionService {
    async retrieveAll (): Promise<Array<ProductTransactionFormattedForConstruction>> {
        const { data } = await httpClient.get<RetrieveProductTransactionOutput>("/product/transactions")
            
        return data.productTransactions
    }

    async create (input: CreateProductTransactionInput): Promise<void> {
        await httpClient.post("/product/transaction", input)
    }
}

export default new ProductTransactionService()