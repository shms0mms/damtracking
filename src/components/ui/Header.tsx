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
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
import MenuButton from "./MenuButton"
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
	const [isOpenMenu, updateIsOpenMenu] = useState(false)
	const { matches: isMobile } = useMediaQuery(media.mobile)
	return (
		<div
			className={`w-full ${
				scroll > 0 ? "py-2" : "py-4"
			} transition-all fixed top-0 left-0 z-10 duration-300 ease-in-out px-4 shadow-md bg-white`}
		>
			<div className="flex items-center justify-between gap-2">
				<Logo />
				<div
					className={`flex items-center gap-10 ${
						isMobile &&
						"flex-col fixed transition-all overflow-auto duration-300 z-10 pt-20 top-0 h-full w-full bg-white"
					} ${
						isMobile && isOpenMenu
							? "left-0"
							: isMobile && !isOpenMenu && "-left-full"
					}`}
				>
					<ButtonSmoothScroll term="visitka">Визитка</ButtonSmoothScroll>
					<ButtonSmoothScroll term="creators">Создатели</ButtonSmoothScroll>
					<ButtonSmoothScroll term="advantages">
						Преимущества
					</ButtonSmoothScroll>
					{isAuth ? (
						<NextLink
							href={routes.settings}
							className="flex items-center gap-2 text-dark-purple"
						>
							<div className="bg-purple rounded-[50%] text-white p-1.5">
								<User2Icon width={14} height={14} />
							</div>
							{user?.username}
						</NextLink>
					) : (
						<NextLink href={routes.login}>
							<LogIn color={colors["dark-purple"]} />
						</NextLink>
					)}
				</div>
				{isMobile && (
					<MenuButton
						isMenuOpen={isOpenMenu}
						updateIsMenuOpen={updateIsOpenMenu}
					/>
				)}
			</div>
		</div>
	)
}

export default Header
