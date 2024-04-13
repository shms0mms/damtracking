"use client"
import { useParams } from "next/navigation"
import BaseLayout from "../BaseLayout"
import useCompany from "@/hooks/useCompany"
import { useEffect, useState } from "react"
import { Product } from "@/types/auth.types"
import ProductDetail from "../client/ProductDetail"
export interface ProductDetail extends Product {
	company_id: number
	company_name: string
}
export default function ProductDetailScreen() {
	const [product, setProduct] = useState<ProductDetail | {}>({})
	const { getProductById, getAllCompanies } = useCompany()
	const { productId: id } = useParams()
	const updateProduct = async () => {
		const prdct = await getProductById(+id)
		setProduct(prdct)
		const cmpns = await getAllCompanies()

		if (cmpns.length)
			for (let i = 0; i < cmpns.length; i++) {
				const cmpn = cmpns[i]

				if (cmpn.id === (prdct as ProductDetail).company_id)
					setProduct(state => ({ ...state, company_name: cmpn.company_name }))
			}
	}
	useEffect(() => {
		updateProduct()
	}, [])

	return (
		<BaseLayout>
			{product && <ProductDetail {...(product as ProductDetail)} />}
		</BaseLayout>
	)
}
