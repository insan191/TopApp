import cn from "classnames"
import { format } from "date-fns"
import Link from "next/link"
import styles from "./Footer.module.css"
import { FooterProps } from "./Footer.props"

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
			<Link href="#">Пользовательское соглашение</Link>
			<Link href="#">Политика конфиденциальности</Link>
		</footer>
	)
}
