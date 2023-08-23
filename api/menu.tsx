import { API } from "@/app/api"
import { SecondMenuItem } from "@/interfaces/menu.interface"

export const getMenu = async (
	firstCategory: number
): Promise<SecondMenuItem[]> => {
	const res = await fetch(API.topPage.find, {
		method: "POST",
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({ "content-type": "application/json" }),
		next: { revalidate: 10 },
	})
	console.log("revalidating getMenu")
	return res.json()
}
