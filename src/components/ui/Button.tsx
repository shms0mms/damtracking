import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<PropsWithChildren<IButton>> = props => {
	const { children, type, className, ..._props } = props
	return (
		<button
			type={type || "button"}
			className={`bg-purple py-2 px-12 text-white text-base font-bold rounded-md ease-in-out transition-all duration-300 hover:bg-dark-purple ${className}`}
			{..._props}
		>
			{children}
		</button>
	)
}

export default Button
