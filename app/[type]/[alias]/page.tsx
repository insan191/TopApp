import { getPage } from "@/api/page"
import { getProducts } from "@/api/products"
import Product from "./components/Product/Product"

const AliasPage = async ({
	params,
}: {
	params: { alias: string; products: string }
}) => {
	const page = await getPage(params.alias)
	const products = await getProducts(page?.category, 10)

	return (
		<div>
			{products?.map(productItem => (
				<Product product={productItem} />
			))}
		</div>
	)
}

export default AliasPage
