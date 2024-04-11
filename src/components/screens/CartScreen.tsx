/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from "react"
import CartControl from "../client/CartControl"
import CartProducts from "../client/CartProducts"
import Container from "../ui/Container"
import { Product } from "@/types/auth.types"
import useCart from "@/hooks/useCart"
import productsAssets from "@/assets/products.assets"
import sum from "@/utils/sum.utils"
import useContext from "@/hooks/useContext"
import { CartContext } from "@/context/CartContext"

export default function CartScreen() {
	const [products, setProducts] = useState<Product[]>(productsAssets)
	const { getAllProducts } = useCart()
	const updateProducts = async () => {
		const prdcts = await getAllProducts()

		setProducts(prdcts || [])
	}
	const { quantityProducts, updateQuantityProducts } = useContext(CartContext)
	useEffect(() => {
		updateProducts()
		updateQuantityProducts(products.length)
	}, [])

	return (
		<Container>
			<div className="h-full flex gap-4 justify-between">
				<div className="h-full flex-[0_1_70%]">
					<CartProducts products={products} />
				</div>
				<div className="h-full flex-[0_1_30%]">
					<CartControl
						quantity={quantityProducts}
						sum={sum(products.map(p => p.price))}
					/>
				</div>
			</div>
		</Container>
	)
}
