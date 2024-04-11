import { FC } from "react"
import { IMenuListItem } from "./MenuList"
import Link from "next/link"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import isExistsInURL from "@/utils/isExistsInURL.utils"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
const MenuListItem: FC<IMenuListItem> = ({ icon, id, text, href }) => {
	const { isDecreased } = useContext(AppContext)
	const { matches: isSmall } = useMediaQuery(media.small)
	return (
		<>
			<Link
				className={`${
					isExistsInURL(href || "/") ? " opacity-100" : "opacity-40"
				} relative text-dark-purple hover:opacity-100 ${
					isDecreased && !isSmall ? "text-[0px]" : "text-base gap-2"
				} transition-all duration-300 flex items-center menu-list-item--${id}`}
				href={href || ""}
			>
				<span
					className={`flex transition-all duration-300 items-center justify-start`}
				>
					{icon}
				</span>
				<span className={""}>{text}</span>
			</Link>
		</>
	)
}

export default MenuListItem
