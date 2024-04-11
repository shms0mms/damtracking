import { ReactFunction } from "@/types/app.types"
import { FC, PropsWithChildren, createContext, useState } from "react"
export type TCartContext = {
	quantityProducts: number
	updateQuantityProducts: ReactFunction<number>
	priceProducts: number
	updatePriceProducts: ReactFunction<number>
}
export const CartContext = createContext<TCartContext | {}>({})

const CartProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [quantityProducts, updateQuantityProducts] = useState<number>(0)
	const [priceProducts, updatePriceProducts] = useState<number>(0)
	const value: TCartContext = {
		quantityProducts,
		updateQuantityProducts,
		updatePriceProducts,
		priceProducts,
	}
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
