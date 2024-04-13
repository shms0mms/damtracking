import { UIComponent } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"

export interface IText extends UIComponent {}

const Text: FC<PropsWithChildren<IText>> = ({
	className,
	onClick,
	children,
}) => {
	return (
		<div
			className={`text-2xl leading-10 text-dark-purple font-semibold ${className}`}
		>
			{children}
		</div>
	)
}

export default Text
