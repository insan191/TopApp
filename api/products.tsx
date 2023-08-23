import { API } from "@/app/api"
import { ProductModel } from "@/interfaces/product.interface"

export const getProducts = async (
	category: string | undefined,
	limit: number
): Promise<ProductModel[] | null> => {
	const res = await fetch(API.product.find, {
		method: "POST",
		body: JSON.stringify({
			category,
			limit,
		}),
		headers: new Headers({ "content-type": "application/json" }),
		next: { revalidate: 10 },
	})
	if (!res.ok) {
		return null
	}
	console.log("revalidating getProducts")
	return res.json()
}
