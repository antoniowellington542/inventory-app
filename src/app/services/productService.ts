import httpClient from "@/app/services/httpClient"

interface Product {
    id: number
    name: string
    quantity: number
    role: {
        id: number
        name: string
    }
}

interface RetrieveProductsResponse {
    products: Array<Product>
}


class ProductService {
    async retrieveAll (): Promise<RetrieveProductsResponse> {
        const { data } = await httpClient.get<RetrieveProductsResponse>("/products")
            
        return data
    }
}

export default new ProductService()