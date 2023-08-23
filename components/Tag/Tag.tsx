import cn from "classnames"
import styles from "./Tag.module.css"
import { TagsProps } from "./Tag.props"
export const Tag = ({
	size = "s",
	children,
	color = "ghost",
	href,
	className,
	...props
}: TagsProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, size, {
				[styles.s]: size === "s",
				[styles.m]: size === "m",
				[styles.ghost]: color === "ghost",
				[styles.grey]: color === "grey",
				[styles.green]: color === "green",
				[styles.red]: color === "red",
				[styles.primary]: color === "primary",
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
