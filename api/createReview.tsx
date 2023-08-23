import { IReviewForm } from "@/app/[type]/[alias]/components/ReviewForm/ReviewForm.interface"
import { API } from "@/app/api"

interface ReviewProps extends IReviewForm {
	productId: string
}

export const CreateReview = async (review: ReviewProps) => {
	const res = await fetch(API.review.createDemo, {
		method: "POST",
		body: JSON.stringify(review),
		headers: new Headers({ "content-type": "application/json" }),
	})
	return res.json()
}
