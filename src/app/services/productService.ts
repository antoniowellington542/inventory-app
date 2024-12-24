import httpClient from "@/app/services/httpClient"

export interface Product {
    id: number
    name: string
    quantity: number
    price: number
    category: {
        id: number
        name: string
    }
}

interface RetrieveProductsOutput {
    products: Array<Product>
}

export interface CreateProductInput {
    name: string
    quantity: number
    categoryId: number
    price: number
}


class ProductService {
    async retrieveAll (): Promise<Array<Product>> {
        const { data } = await httpClient.get<RetrieveProductsOutput>("/products")
            
        return data.products
    }

    async create (input: CreateProductInput): Promise<void> {
        await httpClient.post("/product", input)
    }
}

export default new ProductService()