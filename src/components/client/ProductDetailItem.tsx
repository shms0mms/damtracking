import { UIComponent } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"

export interface IProductDetailItem extends UIComponent {
	title: string
}

const ProductDetailItem: FC<PropsWithChildren<IProductDetailItem>> = ({
	title,
	className,
	children,
}) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<div className="text-dark-purple font-medium">{title}:</div>
			{children}
		</div>
	)
}

export default ProductDetailItem
