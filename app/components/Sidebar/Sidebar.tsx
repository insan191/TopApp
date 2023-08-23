import { Search } from "@/components/Search/Search"
import cn from "classnames"
import Menu from "../Menu/Menu"
import styles from "./Sidebar.module.css"
import { SidebarProps } from "./Sidebar.props"
import Logo from "./logo.svg"

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	)
}