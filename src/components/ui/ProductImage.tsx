import { FC } from "react"

export interface IProductImage {
	company_name: string
}

const ProductImage: FC<IProductImage> = ({ company_name }) => {
	return (
		<div className="w-full p-2 flex opacity-60 font-semibold items-center justify-center h-full border border-solid border-light">
			Товар компании {company_name}
		</div>
	)
}

export default ProductImage
