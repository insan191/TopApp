"use client"

import { CreateReview } from "@/api/createReview"
import { Button, Rating } from "@/components"
import Input from "@/components/Input/Input"
import Textarea from "@/components/Textarea/Textarea"
import cn from "classnames"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { IReviewForm } from "./ReviewForm.interface"
import styles from "./ReviewForm.module.css"
import { ReviewFormProps } from "./ReviewForm.props"
import CloseIcon from "./close.svg"

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
	const [isSuccess, setIsSuccess] = useState<string>("")

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IReviewForm>({ mode: "onBlur" })

	const handleSendReview = async (formData: IReviewForm) => {
		const data = await CreateReview({
			...formData,
			productId,
		})
		if (!data.error) {
			reset()
			setIsSuccess("success")
		} else {
			setIsSuccess("error")
		}
		setTimeout(() => {
			setIsSuccess("")
		}, 5000)
	}

	return (
		<form onSubmit={handleSubmit(handleSendReview)}>
			<div className={cn(styles.reviewForm)} {...props}>
				<Input
					{...register("name", {
						required: {
							value: true,
							message: "Заполните имя",
						},
					})}
					error={errors.name}
					placeholder="Имя"
				/>
				<Input
					{...register("title", {
						required: {
							value: true,
							message: "Заполните заголовок",
						},
					})}
					error={errors.title}
					className={styles.title}
					placeholder="Заголовок отзыва"
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: {
								value: true,
								message: "Укажите рейтинг",
							},
						}}
						render={({ field }) => (
							<Rating
								rating={field.value}
								isEditable
								error={errors.rating}
								ref={field.ref}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register("description", {
						required: {
							value: true,
							message: "Заполните описание",
						},
					})}
					error={errors.description}
					className={styles.description}
					placeholder="Текст отзыва"
				/>
				<div className={styles.submit}>
					<Button appearance="primary" type="submit">
						Отправить
					</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div
				className={cn(styles.panel, {
					[styles.success]: isSuccess === "success",
				})}
			>
				<div className={styles.panelTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<button
					className={styles.close}
					type="button"
					onClick={() => setIsSuccess("")}
				>
					<CloseIcon />
				</button>
			</div>
			<div
				className={cn(styles.panel, {
					[styles.error]: isSuccess === "error",
				})}
			>
				<div className={styles.panelTitle}>Ошибка!</div>
				<div>Пожалуйста, попробуйте перезагрузить страницу.</div>
				<button
					className={styles.close}
					type="button"
					onClick={() => setIsSuccess("")}
				>
					<CloseIcon />
				</button>
			</div>
		</form>
	)
}

export default ReviewForm
