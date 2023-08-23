"use client"
import cn from "classnames"
import { ForwardedRef, forwardRef } from "react"
import styles from "./Card.module.css"
import { CardProps } from "./Card.props"

const Card = forwardRef(
	(
		{ color = "white", children, className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div
				ref={ref}
				className={cn(styles.card, className, {
					[styles.blue]: color == "blue",
				})}
				{...props}
			>
				{children}
			</div>
		)
	}
)

export default Card
