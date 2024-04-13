/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Product } from "@/types/auth.types"
import { FC, useEffect, useMemo, useState } from "react"
import Title from "../ui/Title"
import formatPrice from "@/utils/formatPrice.utils"
import { CircleHelp, Trash } from "lucide-react"
import { colors } from "../../../tailwind.config"
import useCart from "@/hooks/useCart"
import Confirm from "../ui/Confirm"
import Link from "next/link"
import { routes } from "@/constants/routes.constants"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
import Price from "./Price"
export interface IProductCard extends Product {
	counts: number
	company_id: number
}
const ProductCard: FC<IProductCard> = ({ id, price, title, counts }) => {
	const { deleteProduct } = useCart()
	const [isOpenModal, updateIsOpenModal] = useState(false)
	const [result, setResult] = useState<boolean>(false)
	useEffect(() => {
		if (result) {
			deleteProduct(id)
		}
	}, [result])
	const column = `flex font-medium items-center gap-2`
	const memoedPrice = useMemo(
		() => formatPrice(price * counts),
		[price, counts]
	)

	const { matches: isDesktop } = useMediaQuery(media.desktop)
	return (
		<div
			className={`border border-solid border-light grid ${
				!isDesktop && "grid-cols-2"
			}  gap-3 w-full p-4 rounded-md`}
		>
			<div className="flex flex-col">
				<Title className="text-base">{title}</Title>
				<div className={column + " mb-2"}>
					Количество товаров:
					<span className="text-dark-purple">{counts}</span>
				</div>
				<div className={column}>
					Цена за товар
					<span className="text-dark-purple">{formatPrice(price)}</span>
				</div>
			</div>
			<div
				className={`flex items-center gap-2 ${isDesktop && "justify-between"}`}
			>
				{!isDesktop && (
					<div className="w-full flex items-center gap-10">
						<Price price={memoedPrice} />
					</div>
				)}
				{isDesktop && <Price price={memoedPrice} />}
				<div className="flex items-center gap-2">
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
