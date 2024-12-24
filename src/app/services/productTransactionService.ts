import httpClient from "@/app/services/httpClient"
import {
    ProductTransactionFormattedForConstruction,
    CreateProductTransactionInput,
    RetrieveProductTransactionOutput
} from "@/app/protocols/ProductTransactionProtocol"

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