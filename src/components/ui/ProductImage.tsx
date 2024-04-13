import { FC } from "react"

export interface IProductImage {
	company_name: string
}

const ProductImage: FC<IProductImage> = ({ company_name }) => {
	return (
		<div className="w-full opacity-35 text-center rounded-lg p-2 flex font-medium items-center justify-center h-full border border-solid border-purple">
			<span className="">Товар компании {company_name}</span>
		</div>
	)
}

export default ProductImage
