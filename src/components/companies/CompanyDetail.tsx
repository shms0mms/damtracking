"use client"
import useCompany from "@/hooks/useCompany"
import { CompanyDB, Product } from "@/types/auth.types"
import { Truck } from "lucide-react"
import { FC, useEffect, useState } from "react"
import Products from "../ui/Products"

const CompanyDetail: FC<CompanyDB> = ({ company_name, id }) => {
	const [products, setProducts] = useState<Product[]>([])
	const { getProductsFromCompanyId } = useCompany()
	const updateProducts = async () => {
		const prdcts = await getProductsFromCompanyId(id)
		setProducts(prdcts)
	}
	useEffect(() => {
		updateProducts()
	}, [])
	return (
		<div className="p-4">
			<div className="font-semibold flex items-center gap-2 text-xl">
				<Truck /> {company_name}
			</div>
			<Products
				products={products}
				title="Товары этой компании"
				setProducts={setProducts}
			/>
		</div>
	)
}

export default CompanyDetail
