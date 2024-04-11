import { routes } from "@/constants/routes.constants"
import Link from "next/link"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLink?: boolean
	href?: string
}
const Button: FC<PropsWithChildren<IButton>> = props => {
	const { children, type, className, isLink, href, ..._props } = props
	const styles = `bg-purple py-2 px-12 text-white text-base font-bold rounded-md ease-in-out transition-all duration-300 hover:bg-dark-purple ${className}`
	return (
		<>
			{isLink ? (
				<Link className={styles} href={href || routes.home}>
					{children}
				</Link>
			) : (
				<button type={type || "button"} className={styles} {..._props}>
					{children}
				</button>
			)}
		</>
	)
}

export default Button
