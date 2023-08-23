import cn from "classnames"
import styles from "./P.module.css"
import { PProps } from "./P.props"
export const P = ({ size, children, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, size, {
				[styles.s]: size === "s",
				[styles.s]: size === "m",
				[styles.s]: size === "l",
			})}
			{...props}
		>
			{children}
		</p>
	)
}
