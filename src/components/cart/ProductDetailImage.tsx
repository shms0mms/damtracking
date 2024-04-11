import { FC } from "react"

export interface IProductDetailImage {
	company_name: string
}

const ProductDetailImage: FC<IProductDetailImage> = ({ company_name }) => {
	return (
		<div className="w-full h-full border border-solid border-light">
			Товар компании {company_name}
		</div>
	)
}

export default ProductDetailImage
