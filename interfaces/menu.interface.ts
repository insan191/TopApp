import { TopLevelCategory } from "./page.interface"

export interface ThirdMenuItem {
	alias: string
	title: string
	_id: string
	category: string
}

export interface SecondMenuItem {
	_id: {
		secondCategory: string
	}
	isOpened?: boolean
	pages: ThirdMenuItem[]
}

export interface FirstMenuItem {
	route: string
	name: string
	icon: JSX.Element
	id: TopLevelCategory
}
