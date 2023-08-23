const decOfNum = (number: number, titles: [string, string, string]): string => {
	const caces = [2, 0, 1, 1, 1, 2]
	return titles[
		number % 100 > 4 && number < 20
			? 2
			: caces[number % 10 < 5 ? number % 10 : 5]
	]
}

export default decOfNum
