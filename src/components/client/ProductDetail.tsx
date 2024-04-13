"use client"
import { Product } from "@/types/auth.types"
import { FC } from "react"
import Title from "../ui/Title"
import ProductImage from "../ui/ProductImage"
import ProductDetailItem from "./ProductDetailItem"
import Text from "../ui/Text"
import formatPrice from "@/utils/formatPrice.utils"
import Button from "../ui/Button"
import useCart from "@/hooks/useCart"
import { Toaster, toast } from "sonner"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"

const ProductDetail: FC<Product & { company_name: string }> = ({
	desc,
	id,
	price,
	title,
	company_name,
}) => {
	const { matches: isXga } = useMediaQuery(media.xga)
	const { matches: isMobile } = useMediaQuery(media.mobile)
	const block = `flex flex-col min-h-full gap-5 ${
		isXga && !isMobile
			? "flex-[0_1_50%]"
			: isMobile
			? "flex-[0_1_100%]"
			: "flex-[0_1_80%]"
	}`
	const miniBlock = `${
		isXga && !isMobile
			? "flex-[0_1_50%]"
			: isMobile
			? "flex-[0_1_100%]"
			: "flex-[0_1_20%]"
	} `
	const { addProduct } = useCart()
	return (
		<div className="p-5 flex flex-col gap-5">
			<Title>{title}</Title>
			<div className={`flex gap-5 ${isMobile && "flex-col"}`}>
				<div className={miniBlock + ` ${!isMobile && "min-h-[320px]"} `}>
					<ProductImage company_name={company_name} />
				</div>
				<div className={block}>
					<div className="flex flex-[1_1_auto] h-full flex-col gap-3">
						<ProductDetailItem title={"Название товара"}>
							<Title className="text-base">{title}</Title>
						</ProductDetailItem>
						<ProductDetailItem title={"Описание товара"}>
							<Text className="text-base">{desc}</Text>
						</ProductDetailItem>
					</div>
					<div
						className={`flex gap-2 ${
							!isXga && "items-center justify-between"
						}  ${isXga && "flex-col"}`}
					>
						<div
							className={`text-dark-purple font-bold text-xl ${
								isMobile && "flex-[1_1_auto]"
							}`}
						>
							Цена: {formatPrice(price)}
						</div>
						<Button
							className="py-1.5 px-4 text-sm"
							onClick={() => {
								addProduct(id)
								toast("Товар успешно добавлен в корзину")
							}}
						>
							Добавить в корзину
						</Button>
					</div>
				</div>
			</div>
			<Toaster expand toastOptions={{ className: "auth-toast" }} />
		</div>
	)
}

export default ProductDetail
