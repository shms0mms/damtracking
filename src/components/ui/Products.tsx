import { AppContext } from "@/context/AppProvider"
import useContext from "@/hooks/useContext"
import { FC } from "react"
import ProductColumn from "./ProductColumn"
import Loader from "./Loader"
import { Product } from "@/types/auth.types"
interface IProducts {
	products: Product[]
}
const Products: FC<IProducts> = ({ products }) => {
	const { user } = useContext(AppContext)

	const company_name = user?.company_name
	return (
		<>
			<div className="grid grid-cols-template gap-5">
				{products.length ? (
					products.map(p => (
						<ProductColumn company_name={company_name} {...p} key={p.id} />
					))
				) : (
					<Loader />
				)}
			</div>
		</>
	)
}

export default Products
