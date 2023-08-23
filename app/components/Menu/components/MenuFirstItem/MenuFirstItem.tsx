"use client"

import { FirstMenuItem, SecondMenuItem } from "@/interfaces/menu.interface"
import cn from "classnames"
import Link from "next/link"
import styles from "../../Menu.module.css"
import MenuSecondItem from "../MenuSecondItem/MenuSecondItem"

const FirstMenuItem = ({
	firstMenuItem,
	menu,
}: {
	firstMenuItem: FirstMenuItem
	menu: SecondMenuItem[]
}) => {
	return (
		<li
			className={cn(styles.firstLevel, {
				[styles.firstLevelActive]: firstMenuItem.id === 0,
			})}
		>
			<Link href={`/${firstMenuItem.route}`}>
				{firstMenuItem.icon}
				<span>{firstMenuItem.name}</span>
			</Link>
			<ul className={styles.secondBlock}>
				{firstMenuItem.id === 0 &&
					menu.map(secondMenuItem => (
						<MenuSecondItem
							key={secondMenuItem._id.secondCategory}
							firstMenuItem={firstMenuItem}
							secondMenuItem={secondMenuItem}
						/>
					))}
			</ul>
		</li>
	)
}

export default FirstMenuItem
