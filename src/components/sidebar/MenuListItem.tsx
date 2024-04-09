import { FC } from "react"
import { IMenuListItem } from "./MenuList"
import Link from "next/link"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppRrovider"
import isExistsInURL from "@/utils/isExistsInURL.utils"
const MenuListItem: FC<IMenuListItem> = ({ icon, id, text, href }) => {
	const { isDecreased } = useContext(AppContext)
	return (
		<>
			<Link
				className={`${
					isExistsInURL(href || "/") ? " opacity-100" : "opacity-40"
				} relative text-dark-purple hover:opacity-100 ${
					isDecreased ? "text-[0px]" : "text-base gap-2"
				} transition-all duration-300 flex items-center menu-list-item--${id}`}
				href={href || ""}
			>
				<span
					className={`flex transition-all duration-300 items-center justify-start ${
						!isDecreased || "w-full"
					}`}
				>
					{icon}
				</span>
				<span className={""}>{text}</span>
			</Link>
		</>
	)
}

export default MenuListItem
