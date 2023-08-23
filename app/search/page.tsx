"use client"

import { useSearchParams } from "next/navigation"

const Search = () => {
	const searchParams = useSearchParams()

	return <div>{searchParams.get("s")}</div>
}

export default Search
