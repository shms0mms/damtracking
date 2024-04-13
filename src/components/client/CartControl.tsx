import { FC } from "react"
import Button from "../ui/Button"
import { routes } from "@/constants/routes.constants"
import CartControlItem from "./CartControlItem"
import formatPrice from "@/utils/formatPrice.utils"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
interface ICartControl {
	sum: number
	quantity: number
	companyId: number
}
const CartControl: FC<ICartControl> = ({ sum, quantity, companyId }) => {
	const { matches: isDesktop } = useMediaQuery(media.desktop)
	return (
		<div className={`bg-light p-4 ${!isDesktop && "h-[50%]"} `}>
			<div className="flex flex-col gap-4 h-full">
				<div className="flex flex-col gap-4 flex-[1_1_auto]">
					<CartControlItem title="Сумма" value={formatPrice(sum).toString()} />
					<CartControlItem title="Скидка" value={formatPrice(0).toString()} />
					<CartControlItem
						title="Количество товаров"
						value={quantity.toString()}
					/>
				</div>
				<Button className="text-center" isLink href={routes.order(companyId)}>
					Оформить заказ
				</Button>
			</div>
		</div>
	)
}

export default CartControl
