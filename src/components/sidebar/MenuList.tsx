import { routes } from "@/constants/routes.constants"
import {
	Book,
	Factory,
	Home,
	LogIn,
	MessageCircle,
	Timer,
	User,
	Waypoints,
} from "lucide-react"
import { FC, ReactNode } from "react"
import MenuListItem from "./MenuListItem"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppRrovider"
export interface IMenuListItem {
	href?: string
	icon: ReactNode
	text: string
	id: number
}
const MenuList: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	const size = isDecreased ? 30 : 24
	const items = [
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
		{
			id: 3,
			icon: <User width={size} height={size} />,
			text: "Регистрация",
			href: routes.register,
		},
		{
			id: 4,
			icon: <Factory width={size} height={size} />,
			text: "Все компании",
			href: routes.companies,
		},
		{
			id: 5,
			icon: <Waypoints width={size} height={size} />,
			text: "Добавить маршрут",
			href: routes.companies,
		},
	] as IMenuListItem[]
	return (
		<>
			<div className="flex flex-col gap-6">
				{items.map(i => (
					<MenuListItem {...i} key={i.id} />
				))}
			</div>
		</>
	)
}

export default MenuList
