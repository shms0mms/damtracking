import { AppContext } from "@/context/AppProvider"
import useContext from "@/hooks/useContext"
import { FC } from "react"
import ProductColumn from "./ProductColumn"
import Loader from "./Loader"
import { Product } from "@/types/auth.types"
import Title from "./Title"
import { ReactFunction } from "@/types/app.types"
interface IProducts {
	products: Product[]
	title?: string
	setProducts: ReactFunction<Product[]>
	withDelete?: boolean
}
const Products: FC<IProducts> = ({
	products,
	title,
	setProducts,
	withDelete,
}) => {
	const { user } = useContext(AppContext)

	const company_name = user?.company_name
	return (
		<div className="w-full h-full p-4">
			{!!title && <Title className="mb-4">{title}</Title>}
			{products && products.length ? (
				<div className="w-full h-full grid grid-cols-template gap-8">
					{products.map(p => (
						<ProductColumn
							setProducts={setProducts}
							company_name={company_name}
							{...p}
							withDelete={withDelete}
							key={p.id}
						/>
					))}
				</div>
			) : (
				<Loader size={32} />
			)}
		</div>
	)
}

export default Products
