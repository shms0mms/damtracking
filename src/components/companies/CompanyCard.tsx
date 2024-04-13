"use client"
import { CompanyDB, Product } from "@/types/auth.types"
import { Truck } from "lucide-react"
import { FC, useEffect, useState } from "react"
import Title from "../ui/Title"
import Link from "../ui/Link"
import { routes } from "@/constants/routes.constants"
import useCompany from "@/hooks/useCompany"

const CompanyCard: FC<CompanyDB> = ({ company_name, id }) => {
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
		<div className="flex flex-col gap-5">
			<div className="flex items-center justify-between w-[50%]">
				<div className="font-semibold flex items-center gap-2 text-xl">
					<Truck /> {company_name}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div>
					<Title className="text-base mb-3">
						Список недавно добавленных продуктов
					</Title>
					<div className="flex flex-col gap-3 mb-7">
						{products && products.length ? (
							products.slice(0, 5).map(p => (
								<Link
									href={routes.product(p.id)}
									className="before:absolute before:left-[-8px] before:top-1/2 before:rounded-[50%] before:-translate-y-1/2 before:content-[''] relative before:w-1 before:h-1 before:bg-main"
									key={p.id}
								>
									Название товара:{" "}
									<span className="text-dark-purple">{p.title}</span>
								</Link>
							))
						) : (
							<div className="text-dark-purple">Продуктов пока нету</div>
						)}
					</div>

					<Link href={routes.company(id)} className="text-dark-purple">
						{products && products.length
							? "Смотреть больше продуктов"
							: "Смотреть больше"}{" "}
						&rarr;{" "}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CompanyCard
