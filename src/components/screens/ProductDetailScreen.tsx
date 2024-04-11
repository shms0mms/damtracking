"use client"
import { useParams } from "next/navigation"
import BaseLayout from "../BaseLayout"
import useCompany from "@/hooks/useCompany"
import { useEffect, useState } from "react"
import { Product } from "@/types/auth.types"

export default function ProductDetailScreen() {
	const [product, setProduct] = useState<Product>()
	const { getProductById } = useCompany()
	const { productId: id } = useParams()
	const updateProduct = async () => {
		const prdct = await getProductById(+id)
		setProduct(prdct)
	}
	useEffect(() => {
		updateProduct()
	}, [])

	return <BaseLayout></BaseLayout>
}
