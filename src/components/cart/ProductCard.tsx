"use client"
import { Product } from "@/types/auth.types"
import { FC, useState } from "react"
import Title from "../ui/Title"
import formatPrice from "@/utils/formatPrice.utils"
import Counter from "../ui/Counter"
import { Trash } from "lucide-react"
import { colors } from "../../../tailwind.config"
import useCart from "@/hooks/useCart"
const ProductCard: FC<Product> = ({ desc, id, price, title }) => {
	const [quantity, updateQuantity] = useState(1)
	const { deleteProduct } = useCart()

	const [isOpenModal, updateIsOpenModal] = useState(false)
	const [result, setResult] = useState()
	return (
		<div className="border border-solid border-light grid grid-cols-2  gap-3 w-full p-4 rounded-md">
			<Title className="text-base">
				{id}. {title}
			</Title>
			<div className="flex items-center gap-2">
				<div className="w-full flex items-center gap-10">
					<Counter quantity={quantity} updateQuantity={updateQuantity} />
					<div className="text-dark-purple font-medium">
						{formatPrice(price)}
					</div>
				</div>
				<button onClick={() => deleteProduct(id)} type="button">
					<Trash color={colors["dark-purple"]} width={16} height={16} />
				</button>
			</div>
		</div>
	)
}

export default ProductCard
