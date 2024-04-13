import { FC } from "react"
import ProductCard, { IProductCard } from "./ProductCard"
import Title from "../ui/Title"
import Link from "../ui/Link"
import { routes } from "@/constants/routes.constants"
import Loader from "../ui/Loader"
interface ICartProducts {
	products: IProductCard[]
	isLoading: boolean
}
const CartProducts: FC<ICartProducts> = ({ products, isLoading }) => {
	return (
		<div className="flex h-full w-full flex-col gap-4">
			{products.length ? (
				products.map((p, pk) => <ProductCard {...p} key={pk} />)
			) : isLoading ? (
				<Loader size={24} />
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
