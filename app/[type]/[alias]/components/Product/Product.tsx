"use client"

import { Button, Rating, Tag } from "@/components"
import Card from "@/components/Card/Card"
import Divider from "@/components/Divider/Divider"
import decOfNum from "@/utils/decOfNum"
import { priceRu } from "@/utils/priceRu"
import cn from "classnames"
import Image from "next/image"
import { useRef, useState } from "react"
import Review from "../Review/Review"
import ReviewForm from "../ReviewForm/ReviewForm"
import styles from "./Product.module.css"
import { ProductProps } from "./Product.props"

const Product = ({
	product,
	className,
	...props
}: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)
	const reviewRef = useRef<HTMLDivElement>(null)

	const scrollToReview = () => {
		setIsReviewOpened(true)
		reviewRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}
	return (
		<div className={cn(className)} {...props}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRu(product.price)}
					{product.oldPrice && (
						<Tag className={styles.oldPrice} color="green">
							{priceRu(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{priceRu(product.credit)}/<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.categories.map(item => (
						<Tag key={item} className={styles.category} color="ghost">
							{item}
						</Tag>
					))}
				</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>кредит</div>
				<div className={styles.rateTitle}>
					<a href="#ref" onClick={scrollToReview}>
						{product.reviewCount}
						{decOfNum(product.reviewCount, [" отзыв", " отзыва", " отзывов"])}
					</a>
				</div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(item => (
						<div className={styles.characteristics} key={item.name}>
							<span className={styles.characteristicsName}>{item.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{item.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advTitle}>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.advTitle}>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance="primary">Узнать подробнее</Button>
					<Button
						className={styles.reviewButton}
						appearance="ghost"
						arrow={isReviewOpened ? "down" : "right"}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				ref={reviewRef}
				color="blue"
				className={cn(styles.reviews, {
					[styles.opened]: isReviewOpened,
					[styles.closed]: !isReviewOpened,
				})}
			>
				{product.reviews.map(review => (
					<Review review={review} key={review._id} />
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</div>
	)
}

export default Product
