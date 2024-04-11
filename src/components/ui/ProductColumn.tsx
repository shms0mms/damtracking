import { Product } from "@/types/auth.types"
import { FC, useEffect, useState } from "react"
import ProductImage from "./ProductImage"
import Title from "./Title"
import Link from "./Link"
import { routes } from "@/constants/routes.constants"
import formatPrice from "@/utils/formatPrice.utils"
import { ShoppingCart, Trash } from "lucide-react"
import { colors } from "../../../tailwind.config"
import Confirm from "./Confirm"
import Square from "./Square"
import useCompany from "@/hooks/useCompany"
import { ReactFunction } from "@/types/app.types"
import useCart from "@/hooks/useCart"

interface IProductColumn extends Product {
	withDelete?: boolean
	company_name?: string
	setProducts: ReactFunction<Product[]>
}
const ProductColumn: FC<IProductColumn> = ({
	desc,
	id,
	price,
	title,
	company_name,
	withDelete,
	setProducts,
}) => {
	const { deleteProduct } = useCompany()
	const { addProduct } = useCart()
	const [isOpenModal, updateIsOpenModal] = useState(false)
	const [result, setResult] = useState<boolean>(false)
	useEffect(() => {
		if (result) {
			deleteProduct(id)
			setProducts(state => {
				const copy = state
				copy.splice(id - 1, 1)
				return [...copy]
			})
		}
	}, [result])
	return (
		<div className="flex flex-col h-full">
			<div className="h-[320px]">
				<ProductImage company_name={company_name as string} />
			</div>
			<div className="mb-7">
				<Title className="text-lg mb-2">{title}</Title>
				<div className="text-base mb-6 max-h-10 overflow-hidden text-ellipsis">
					{desc}
				</div>
				<div className="text-dark-purple font-bold text-base">
					{formatPrice(price)}
				</div>
			</div>
			<div className="flex items-center justify-between gap-2">
				{withDelete ? (
					<Square onClick={() => updateIsOpenModal(true)}>
						<Trash width={16} height={16} color={colors.red} />
					</Square>
				) : (
					<Square onClick={() => addProduct(id)}>
						<ShoppingCart color={colors["dark-purple"]} />
					</Square>
				)}
				<Link
					className="text-right text-dark-purple transition-all duration-300 hover:text-purple"
					href={routes.product(id)}
				>
					Читать больше &rarr;
				</Link>
			</div>
			<Confirm
				isOpen={isOpenModal}
				setIsOpen={updateIsOpenModal}
				title={"Вы точно хотите удалить этот товар?"}
				text="После удаления товара - он исчезнет"
				sendResult={setResult}
			/>
		</div>
	)
}

export default ProductColumn
