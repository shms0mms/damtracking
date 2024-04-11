const sum = (arr: number[]) => {
	let sum = 0
	arr.forEach(function (item) {
		sum += item
	})
	return sum
}
export default sum
