import { Product } from "@/types/auth.types"
import { FC } from "react"
import ProductImage from "./ProductImage"
import Title from "./Title"

interface IProductColumn extends Product {
	withDelete?: boolean
	company_name?: string
}
const ProductColumn: FC<IProductColumn> = ({
	desc,
	id,
	price,
	title,
	company_name,
	withDelete,
}) => {
	return (
		<div className="flex flex-col h-full">
			<div className="h-full">
				<ProductImage company_name={company_name as string} />
			</div>
			<div>
				<Title />
			</div>
		</div>
	)
}

export default ProductColumn
