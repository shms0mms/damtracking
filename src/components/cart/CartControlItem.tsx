import { FC } from "react"
import Title from "../ui/Title"

export interface ICartControlItem {
	title: string
	value: string
}

const CartControlItem: FC<ICartControlItem> = ({ title, value }) => {
	return (
		<>
			<div className="flex items-center w-full gap-3 justify-between">
				<Title className="text-lg">{title}</Title>
				<div className="text-base font-semibold text-dark-purple">{value}</div>
			</div>
		</>
	)
}

export default CartControlItem
