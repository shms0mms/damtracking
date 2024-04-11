/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Product } from "@/types/auth.types"
import { FC, useEffect, useState } from "react"
import Title from "../ui/Title"
import formatPrice from "@/utils/formatPrice.utils"
import { CircleHelp, Trash } from "lucide-react"
import { colors } from "../../../tailwind.config"
import useCart from "@/hooks/useCart"
import Confirm from "../ui/Confirm"
import Link from "next/link"
import { routes } from "@/constants/routes.constants"
const ProductCard: FC<Product> = ({ id, price, title }) => {
	const { deleteProduct } = useCart()
	const [isOpenModal, updateIsOpenModal] = useState(false)
	const [result, setResult] = useState<boolean>(false)
	useEffect(() => {
		if (result) {
			deleteProduct(id)
		}
	}, [result])
	return (
		<div className="border border-solid border-light grid grid-cols-2  gap-3 w-full p-4 rounded-md">
			<Title className="text-base">
				{id}. {title}
			</Title>
			<div className="flex items-center gap-2">
				<div className="w-full flex items-center gap-10">
					<div className="text-dark-purple font-medium">
						{formatPrice(price)}
					</div>
				</div>
				<button
					onClick={() => {
						updateIsOpenModal(true)
					}}
					type="button"
				>
					<Trash color={colors["dark-purple"]} width={16} height={16} />
				</button>
				<Link href={routes.product(id)}>
					<CircleHelp />
				</Link>
			</div>
			<Confirm
				isOpen={isOpenModal}
				setIsOpen={updateIsOpenModal}
				title={"Вы точно хотите удалить этот товар из корзины?"}
				text="После удаления - товар исчезнет из корзины"
				sendResult={setResult}
			/>
		</div>
	)
}

export default ProductCard
