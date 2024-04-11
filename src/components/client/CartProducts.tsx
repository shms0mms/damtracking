import { FC } from "react"
import ProductCard from "./ProductCard"
import { Product } from "@/types/auth.types"
import Loader from "../ui/Loader"
interface ICartProducts {
	products: Product[]
}
const CartProducts: FC<ICartProducts> = ({ products }) => {
	return (
		<div className="flex h-full w-full flex-col gap-4">
			{products.length ? (
				products.map(p => <ProductCard {...p} key={p.id} />)
			) : (
				<Loader />
			)}
		</div>
	)
}

export default CartProducts
