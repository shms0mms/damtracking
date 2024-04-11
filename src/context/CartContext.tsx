import { FC, PropsWithChildren, createContext } from "react"
export type TCartContext = {}
export const CartContext = createContext<TCartContext | {}>({})

const CartProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const value: TCartContext = {}
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
