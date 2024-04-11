"use client"
import { FC, useEffect } from "react"
import MenuList from "./MenuList"
import Logo from "../ui/Logo"
import useContext from "@/hooks/useContext"
import { AppContext, TAppContext } from "@/context/AppProvider"
import useScreen from "@/hooks/useScreen"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
import { Swipe } from "../ui/Swipe"
import { LogOut } from "lucide-react"
import { colors } from "../../../tailwind.config"
const SideBar: FC = ({}) => {
	const { isDecreased, setIsDecreased, isAuth } =
		useContext<TAppContext>(AppContext)
	const screen = useScreen()

	useEffect(() => {
		if (screen === "mobile") setIsDecreased(true)
		else setIsDecreased(false)
	}, [screen, setIsDecreased])

	const { logout } = useAuth()
	const { matches: isSmall } = useMediaQuery(media.small)
	return (
		<div className="h-full border-[0px] border-r-[1px] border-solid border-r-light">
			{isSmall && (
				<div className="animate-bounce text-xs opacity-40 font-semibold absolute top-1 left-1">
					Открыть меню &rarr; (свайп)
				</div>
			)}
			<Swipe
				classNameOnTouch="left-0"
				classNameOnUnTouch="left-[-100%]"
				status="x"
				className={`transition-all overflow-auto flex flex-col w-full min-h-full z-[100] bg-white  ${
					isSmall && "-left-full absolute top-0"
				}`}
			>
				<div
					className={`flex flex-col gap-6 p-4  ${
						isDecreased && !isSmall ? "max-w-[50px]" : "min-w-[200px]"
					} border-right min-h-full flex-[1_1_auto]`}
				>
					<div className="flex gap-6 flex-col flex-[1_1_auto] h-full">
						<Logo />
						<MenuList />
					</div>
					{isAuth &&
						(isDecreased && !isSmall ? (
							<button onClick={() => logout()}>
								<LogOut color={colors["dark-purple"]} />
							</button>
						) : (
							<Button className="w-full" onClick={() => logout()}>
								Выйти
							</Button>
						))}
				</div>
			</Swipe>
		</div>
	)
}

export default SideBar
