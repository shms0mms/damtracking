import { UIComponent } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"

export interface IRound extends UIComponent {}

const Round: FC<PropsWithChildren<IRound>> = ({
	className,
	onClick,
	children,
}) => {
	return (
		<button
			className={`p-10 rounded-[50%] bg-light flex items-center justify-center ${className}`}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Round
