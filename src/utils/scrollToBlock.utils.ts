const scrollToBlock = (term: string) => {
	const element = document.getElementById(term)

	element?.scrollIntoView({
		behavior: "smooth",
		block: "center",
	})
}

export default scrollToBlock
