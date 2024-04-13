import { ReactFunction } from "@/types/app.types"
import { FC } from "react"

export interface IMenuButton {
	isMenuOpen: boolean
	updateIsMenuOpen: ReactFunction<boolean>
}

const MenuButton: FC<IMenuButton> = ({ isMenuOpen, updateIsMenuOpen }) => {
	const line = `bg-dark-purple w-full h-[1px] transition-all duration-150`
	return (
		<button
			className={`relative z-20 flex w-[20px] flex-col ${
				!isMenuOpen && "gap-1.5 justify-between"
			}`}
			type="button"
			onClick={() => updateIsMenuOpen(!isMenuOpen)}
		>
			<span className={`${line} ${isMenuOpen && "rotate-45"}`}></span>
			<span
				className={`${line} ${isMenuOpen ? "scale-0" : "scale-100"}`}
			></span>
			<span className={`${line} ${isMenuOpen && "-rotate-45"}`}></span>
		</button>
	)
}

export default MenuButton
