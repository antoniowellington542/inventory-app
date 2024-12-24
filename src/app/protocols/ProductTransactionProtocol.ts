import { Product } from "../services/productService"

export type ProductTransaction = {
    id: number
    productId: string
    quantity: number
    type: "add" | "remove"
    totalPrice: number
    createdAt: Date
    updatedAt: Date
}

export type ProductTransactionFormattedForConstruction = {
    id: number
    product: Pick<Product, "id" | "name">
    quantity: ProductTransaction["quantity"]
    type: ProductTransaction["type"]
    totalPrice: ProductTransaction["totalPrice"]
    createdAt: Date
}

export type RetrieveProductTransactionOutput = {
    productTransactions: Array<ProductTransactionFormattedForConstruction>
}

export type CreateProductTransactionInput = {
    transactionType: ProductTransaction["type"]
    quantity: ProductTransaction["quantity"]
    productId: number
    price: ProductTransaction["totalPrice"]
}