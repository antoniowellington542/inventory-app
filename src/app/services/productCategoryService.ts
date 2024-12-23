import httpClient from "@/app/services/httpClient"

export interface ProductCategory {
    id: number
    name: string
}

export interface RetrieveProductCategoriesResponse {
    productCategories: Array<ProductCategory>
}


class ProductCategoryService {
    async retrieveAll (): Promise<RetrieveProductCategoriesResponse> {
        const { data } = await httpClient.get<RetrieveProductCategoriesResponse>("/product/categories")
            
        return data
    }
}

export default new ProductCategoryService()