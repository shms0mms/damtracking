import { UIComponent } from "@/types/app.types"
import scrollToBlock from "@/utils/scrollToBlock.utils"
import { FC, PropsWithChildren } from "react"
interface IButtonSmoothScroll extends UIComponent {
	term: string
}
const ButtonSmoothScroll: FC<PropsWithChildren<IButtonSmoothScroll>> = ({
	children,
	term,
}) => {
	return (
		<button
			className="font-bold text-purple text-sm"
			type="button"
			onClick={() => scrollToBlock(term)}
		>
			{children}
		</button>
	)
}

export default ButtonSmoothScroll
