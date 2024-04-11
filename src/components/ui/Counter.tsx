"use client"
import { ReactFunction } from "@/types/app.types"
import { FC, useEffect } from "react"

export interface ICounter {
	quantity: number
	updateQuantity: ReactFunction<number>
	updateGlobalQuantity?: ReactFunction<number>
	price?: number
}

const Counter: FC<ICounter> = ({
	quantity,
	updateQuantity,
	updateGlobalQuantity,
	price,
}) => {
	const button = `w-9 h-9 text-main font-bold flex items-center justify-center`

	return (
		<>
			<div className="bg-light flex items-center gap-2">
				<button
					onClick={() => {
						updateQuantity(state => (state > 1 ? state - 1 : state))
						quantity > 1 &&
							updateGlobalQuantity &&
							updateGlobalQuantity(state => (state > 1 ? state - 1 : state))
					}}
					className={button}
				>
					-
				</button>
				<div className="text-dark-purple font-bold text-sm">{quantity}</div>
				<button
					onClick={() => {
						updateQuantity(state => (state < 20 ? state + 1 : state))
						quantity < 20 &&
							updateGlobalQuantity &&
							updateGlobalQuantity(state => state + 1)
					}}
					className={button}
				>
					+
				</button>
			</div>
		</>
	)
}

export default Counter
