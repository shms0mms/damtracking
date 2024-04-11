"use client"
import { useEffect, useState } from "react"
import BaseLayout from "../BaseLayout"
import CartControl from "../cart/CartControl"
import CartProducts from "../cart/CartProducts"
import Container from "../ui/Container"
import { Product } from "@/types/auth.types"
import useCart from "@/hooks/useCart"
import productsAssets from "@/assets/products.assets"
import sum from "@/utils/sum.utils"

export default function CartScreen() {
	const [products, setProducts] = useState<Product[]>(productsAssets)
	const { getAllProducts } = useCart()
	const updateProducts = async () => {
		const prdcts = await getAllProducts()

		setProducts(prdcts || [])
	}
	useEffect(() => {
		updateProducts()
	}, [])
	return (
		<BaseLayout>
			<Container>
				<div className="h-full flex gap-4 justify-between">
					<div className="h-full flex-[0_1_70%]">
						<CartProducts products={products} />
					</div>
					<div className="h-full flex-[0_1_30%]">
						<CartControl
							quantity={products.length}
							sum={sum(products.map(p => p.price))}
						/>
					</div>
				</div>
			</Container>
		</BaseLayout>
	)
}
