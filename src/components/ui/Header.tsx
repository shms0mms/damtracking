/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { FC, useEffect, useState } from "react"
import Logo from "./Logo"
import { LogIn, User2Icon } from "lucide-react"
import { colors } from "../../../tailwind.config"
import { routes } from "@/constants/routes.constants"
import ButtonSmoothScroll from "./ButtonSmoothScroll"
import { default as NextLink } from "next/link"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import Square from "./Square"
const Header: FC = ({}) => {
	const { user, isAuth } = useContext(AppContext)
	const [scroll, setScroll] = useState(0)
	const handleScroll = () => {
		setScroll(window.scrollY)
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [typeof window !== "undefined"])

	return (
		<div
			className={`w-full ${
				scroll > 0 ? "py-2 opacity-60" : "py-4"
			} transition-all fixed top-0 left-0 duration-300 ease-in-out px-4 shadow-md bg-white`}
		>
			<div className="flex items-center justify-between gap-2">
				<Logo />
				<div className="flex items-center gap-10">
					<ButtonSmoothScroll term="advantages">
						Преимущества
					</ButtonSmoothScroll>
					<ButtonSmoothScroll term="Параметр 1">Параметр 1</ButtonSmoothScroll>
					<ButtonSmoothScroll term="Параметр 2">Параметр 2</ButtonSmoothScroll>
					<ButtonSmoothScroll term="Параметр 3">Параметр 3</ButtonSmoothScroll>
					{isAuth ? (
						<NextLink
							href={routes.settings}
							className="flex items-center gap-2 text-dark-purple"
						>
							<Square className="bg-purple text-white p-1.5 rounded-[50%]">
								<User2Icon width={14} height={14} />
							</Square>
							{user?.username}
						</NextLink>
					) : (
						<NextLink href={routes.login}>
							<LogIn color={colors["dark-purple"]} />
						</NextLink>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
