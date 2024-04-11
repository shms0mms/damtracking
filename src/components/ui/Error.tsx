import { UIComponent } from "@/types/app.types"
import { FC } from "react"

export interface IError extends UIComponent {
	error?: string
}

const Error: FC<IError> = ({ error, className }) => {
	return (
		<>
			{!!error && (
				<div className={`text-red font-semibold text-xs ${className}`}>
					{error}
				</div>
			)}
		</>
	)
}

export default Error
