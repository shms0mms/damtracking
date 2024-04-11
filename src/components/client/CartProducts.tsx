import { FC } from "react"
import ProductCard from "./ProductCard"
import { Product } from "@/types/auth.types"
import Loader from "../ui/Loader"
import Title from "../ui/Title"
import Link from "../ui/Link"
import { routes } from "@/constants/routes.constants"
interface ICartProducts {
	products: Product[]
}
const CartProducts: FC<ICartProducts> = ({ products }) => {
	return (
		<div className="flex h-full w-full flex-col gap-4">
			{products.length ? (
				products.map(p => <ProductCard {...p} key={p.id} />)
			) : (
				<div className="w-full h-full flex items-center justify-center flex-col gap-2">
					<Title>Товаров в корзине пока нет</Title>
					<Link className="text-dark-purple" href={routes.companies}>
						Перейти на компании
					</Link>
				</div>
			)}
		</div>
	)
}

export default CartProducts
