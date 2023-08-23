import { TopPageModel } from "@/interfaces/page.interface"
import { ProductModel } from "@/interfaces/product.interface"

export interface CapProps {
	page: TopPageModel | null
	products: ProductModel[] | null
}
