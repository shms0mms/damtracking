import { FC } from "react"

export interface IPrice {
	price: string
}

const Price: FC<IPrice> = ({ price }) => {
	return (
		<>
			<div className="text-base text-dark-purple font-semibold">{price}</div>
		</>
	)
}

export default Price
