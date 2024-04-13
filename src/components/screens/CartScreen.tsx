/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from "react"
import CartControl from "../client/CartControl"
import CartProducts from "../client/CartProducts"
import Container from "../ui/Container"
import useCart from "@/hooks/useCart"
import sum from "@/utils/sum.utils"
import useContext from "@/hooks/useContext"
import { CartContext } from "@/context/CartContext"
import { IProductCard } from "../client/ProductCard"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"

export default function CartScreen() {
	const [products, setProducts] = useState<IProductCard[]>([])
	const [isLoading, updateIsLoading] = useState(false)
	const { quantityProducts, updateQuantityProducts } = useContext(CartContext)
	const { getAllProducts } = useCart()
	const updateProducts = async () => {
		updateIsLoading(true)
		const cart = await getAllProducts()
		let _products = []
		let _quantity = 0

		for (let i = 0; i < cart.length; ++i) {
			const item = cart[i]
			_quantity = _quantity + item.counts
			_products.push({ ...item.product, counts: item.counts })
		}
		updateQuantityProducts(_quantity)
		setProducts([..._products])
		updateIsLoading(false)
	}

	const { matches: isDesktop } = useMediaQuery(media.desktop)
	useEffect(() => {
		updateProducts()
	}, [])
	const productsExists = !!products && !!products.length
	return (
		<Container>
			<div
				className={`h-full flex gap-4 justify-between ${
					isDesktop && "flex-col"
				}`}
			>
				<div className={`h-full  w-full ${productsExists && "flex-[0_1_70%]"}`}>
					<CartProducts isLoading={isLoading} products={products} />
				</div>
				{productsExists && (
					<div className={`h-full ${!isDesktop && "flex-[0_1_30%]"}`}>
						<CartControl
							quantity={quantityProducts}
							sum={sum(products.map(p => p.price * p.counts))}
							companyId={products[0].company_id}
						/>
					</div>
				)}
			</div>
		</Container>
	)
}
