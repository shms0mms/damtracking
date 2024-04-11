import { UIComponent } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"

const Square: FC<PropsWithChildren<UIComponent>> = ({
	children,
	className,
	onClick,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`p-3 rounded-md bg-light flex items-center justify-center ${className}`}
		>
			{children}
		</button>
	)
}

export default Square
