/* eslint-disable react-hooks/exhaustive-deps */
import { routes } from "@/constants/routes.constants"
import {
	Book,
	Factory,
	Home,
	LogIn,
	ShoppingCart,
	Waypoints,
} from "lucide-react"
import { FC, ReactNode, useEffect, useState } from "react"
import MenuListItem from "./MenuListItem"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import Loader from "../ui/Loader"
export interface IMenuListItem {
	href?: string
	icon: ReactNode
	text: string
	id: number
}
const MenuList: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	const size = isDecreased ? 30 : 24
	const addPath = {
		id: 4,
		icon: <Waypoints width={size} height={size} />,
		text: "Добавить маршрут",
		href: routes["add-address"],
	}
	const allCompanies = {
		id: 3,
		icon: <Factory width={size} height={size} />,
		text: "Все компании",
		href: routes.companies,
	}
	const cart = {
		id: 5,
		icon: <ShoppingCart width={size} height={size} />,
		text: "Корзина",
		href: routes.cart,
	}
	const [isLoading, updateIsLoading] = useState(false)
	const [items, setItems] = useState([
		{
			id: 1,
			icon: <Home width={size} height={size} />,
			text: "Главная",
			href: routes.home,
		},
		{
			id: 2,
			icon: <LogIn width={size} height={size} />,
			text: "Вход",
			href: routes.login,
		},
	])
	const { user, isAuth } = useContext(AppContext)

	useEffect(() => {
		if (isAuth) {
			updateIsLoading(true)
			if (
				user?.role === "company" &&
				items.every(value => value.id !== addPath.id)
			)
				setItems(state => [...state, addPath])
			else if (
				user?.role === "customer" &&
				items.every(
					value => value.id !== allCompanies.id && value.id !== cart.id
				)
			) {
				setItems(state => [...state, allCompanies, cart])
			}

			updateIsLoading(false)
		} else {
			setItems(state => [...state.slice(0, 2)])
		}
	}, [isAuth, user?.id])

	return (
		<>
			<div className="flex flex-col gap-6">
				{isLoading ? (
					<Loader />
				) : (
					items.map(i => <MenuListItem {...i} key={i.id} />)
				)}
			</div>
		</>
	)
}

export default MenuList
