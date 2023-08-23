"use client"

import cn from "classnames"
import { useRouter } from "next/navigation"
import { KeyboardEvent, MouseEvent, useState } from "react"
import { Button } from "../Button/Button"
import Input from "../Input/Input"
import styles from "./Search.module.css"
import { SearchProps } from "./Search.props"
import GlassIcon from "./glass.svg"

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const router = useRouter()

	const [search, setSearch] = useState<string>("")

	const goToSearch = (
		e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
	) => {
		e.preventDefault()
		router.push(`/search/?s=${search}`)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			goToSearch(e)
		}
	}
	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={e => goToSearch(e)}
				aria-label="Искать по сайту"
			>
				<GlassIcon />
			</Button>
		</form>
	)
}
