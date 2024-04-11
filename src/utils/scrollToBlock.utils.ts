const scrollToBlock = (term: string) => {
	const element = document.getElementById(term)

	element?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
}

export default scrollToBlock
