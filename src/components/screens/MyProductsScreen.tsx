"use client"
import { useEffect, useState } from "react"
import BaseLayout from "../BaseLayout"
import Container from "../ui/Container"
import { Product } from "@/types/auth.types"
import useCompany from "@/hooks/useCompany"
import Products from "../ui/Products"

export default function MyProductsScreen() {
	const [myProducts, setMyProducts] = useState<Product[]>([])
	const { getMyProducts } = useCompany()
	const updateMyProducts = async () => {
		const prdcts = await getMyProducts()
		setMyProducts(prdcts)
	}
	useEffect(() => {
		updateMyProducts()
	}, [])

	return (
		<BaseLayout>
			<Container>
				<Products products={myProducts} />
			</Container>
		</BaseLayout>
	)
}
