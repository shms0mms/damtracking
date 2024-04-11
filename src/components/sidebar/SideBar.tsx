"use client"
import { FC, useEffect } from "react"
import MenuList from "./MenuList"
import Logo from "../ui/Logo"
import useContext from "@/hooks/useContext"
import { AppContext, TAppContext } from "@/context/AppProvider"
import useScreen from "@/hooks/useScreen"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"
import { ZmSwipe } from "zm-swiped"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
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
		<>
			<ZmSwipe
				classNameOnTouch="left-0"
				classNameOnUnTouch="left-[-100%]"
				status="x"
				className={`transition-all overflow-auto w-full min-h-full z-[100] border-[0px] border-r-[1px] border-solid border-r-light bg-white  ${
					isSmall && "-left-full absolute top-0"
				}`}
			>
				<div
					className={`flex flex-col gap-6 pl-4 py-4 ${
						isDecreased ? "max-w-[60px]" : "min-w-[200px]"
					} border-right h-full`}
				>
					<div className="flex gap-6 flex-col flex-[1_1_auto] h-full">
						<Logo />
						<MenuList />
					</div>
					{isAuth && <Button onClick={() => logout()}>Выйти</Button>}
				</div>
			</ZmSwipe>
		</>
	)
}

export default SideBar
