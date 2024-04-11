const formatPrice = (price: number) => {
	const formattedPrice = new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency: "RUB",
	}).format(price)
	return formattedPrice
}

export default formatPrice
