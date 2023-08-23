"use client"

import { FirstMenuItem, SecondMenuItem } from "@/interfaces/menu.interface"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../../Menu.module.css"
import MenuThirdItem from "../MenuThirdItem/MenuThirdItem"

const MenuSecondItem = ({
	secondMenuItem,
	firstMenuItem,
}: {
	secondMenuItem: SecondMenuItem
	firstMenuItem: FirstMenuItem
}) => {
	const pathname = usePathname()
	return (
		<li className={styles.secondLevel}>
			<div className={styles.category}>
				<Link href={`/${firstMenuItem.route}/${secondMenuItem.pages[0].alias}`}>
					{secondMenuItem._id.secondCategory}
				</Link>
			</div>
			{secondMenuItem.pages
				.map(p => p.alias)
				.includes(pathname.split("/")[2]) && (
				<ul className={styles.secondLevelBlock}>
					{secondMenuItem.pages.map(thirdMenuItem => (
						<MenuThirdItem
							key={thirdMenuItem._id}
							thirdMenuItem={thirdMenuItem}
							firstMenuItem={firstMenuItem}
						/>
					))}
				</ul>
			)}
		</li>
	)
}

export default MenuSecondItem
