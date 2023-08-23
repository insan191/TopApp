import { getMenu } from "@/api/menu"
import { firstLevelMenu } from "@/utils/firstLevelMenu"
import styles from "./Menu.module.css"
import MenuItem from "./components/MenuFirstItem/MenuFirstItem"

const Menu = async () => {
	const menu = await getMenu(0)
	return (
		<ul className={styles.menu}>
			{firstLevelMenu.map(firstMenuItem => (
				<MenuItem key={firstMenuItem.route} firstMenuItem={firstMenuItem} menu={menu} />
			))}
		</ul>
	)
}

export default Menu
