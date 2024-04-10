"use client"
import { FC, useEffect } from "react"
import MenuList from "./MenuList"
import Logo from "../ui/Logo"
import useContext from "@/hooks/useContext"
import { AppContext, TAppContext } from "@/context/AppRrovider"
import useScreen from "@/hooks/useScreen"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"

const SideBar: FC = ({}) => {
	const { isDecreased, setIsDecreased } = useContext<TAppContext>(AppContext)
	const screen = useScreen()

	useEffect(() => {
		if (screen === "mobile") setIsDecreased(true)
		else setIsDecreased(false)
	}, [screen, setIsDecreased])

	const { logout } = useAuth()
	return (
		<>
			<div
				className={`flex flex-col gap-6 p-4 ${
					isDecreased ? "min-w-[40px]" : "min-w-[200px]"
				} border-right h-full`}
			>
				<div className="flex gap-6 flex-col flex-[1_1_auto] h-full">
					<Logo />
					<MenuList />
				</div>
				<Button onClick={() => logout()}>Выйти</Button>
			</div>
		</>
	)
}

export default SideBar
