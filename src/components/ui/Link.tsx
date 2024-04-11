import { FC, PropsWithChildren } from "react"
import { default as NextLink } from "next/link"
import { routes } from "@/constants/routes.constants"
import { UIComponent } from "@/types/app.types"

interface ILink extends UIComponent {
	href?: string
}
const Link: FC<PropsWithChildren<ILink>> = ({ children, href, className }) => {
	return (
		<NextLink
			className={`font-semibold ${className}`}
			href={href || routes.home}
		>
			{children}
		</NextLink>
	)
}

export default Link
