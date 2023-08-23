import { FirstMenuItem, ThirdMenuItem } from "@/interfaces/menu.interface"
import cn from "classnames"
import Link from "next/link"
import { useParams } from "next/navigation"
import styles from "../../Menu.module.css"

const MenuThirdItem = ({
	thirdMenuItem,
	firstMenuItem,
}: {
	thirdMenuItem: ThirdMenuItem
	firstMenuItem: FirstMenuItem
}) => {
	const params = useParams()
	return (
		<li
			className={cn(styles.thirdLevel, {
				[styles.thirdLevelActive]: params.alias === thirdMenuItem.alias,
			})}
		>
			<Link href={`/${firstMenuItem.route}/${thirdMenuItem.alias}`}>
				{thirdMenuItem.category}
			</Link>
		</li>
	)
}

export default MenuThirdItem
