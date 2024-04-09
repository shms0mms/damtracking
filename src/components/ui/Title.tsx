import { UIComponent } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"

const Title: FC<PropsWithChildren<UIComponent>> = ({ children, className }) => {
	return <div className={`font-bold text-2xl ${className}`}>{children}</div>
}

export default Title
