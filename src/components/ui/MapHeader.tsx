import { FC, useState } from "react"
import Title from "./Title"
import { Bus, Car, Footprints } from "lucide-react"
import { colors } from "../../../tailwind.config"
import Square from "./Square"
import useContext from "@/hooks/useContext"
import { CompanyContext } from "@/context/CompanyContext"
import { AppContext } from "@/context/AppProvider"
import { UserRole } from "@/types/auth.types"
import { media } from "@/constants/media.constants"
import { useMediaQuery } from "react-pcp-form"
import MenuButton from "./MenuButton"

const MapHeader: FC = ({}) => {
	const { quantityPoints, movementMethod, updateMovementMethod } =
		useContext(CompanyContext)
	const { user } = useContext(AppContext)
	const role: UserRole | undefined = user?.role
	const company_name = user?.company_name
	const size = 26
	const { matches: isMobile } = useMediaQuery(media.mobile)
	const column = `flex items-center gap-2 ${!isMobile && "justify-between"}`
	const active = "bg-purple"
	const isCar = movementMethod === "DRIVING"
	const hover = "hover:bg-violet-300 transition-all duration-300"
	const [isOpenMenu, updateIsOpenMenu] = useState(false)

	return (
		<>
			<div
				className={`flex justify-between gap-1 py-2 px-4 ${
					!isMobile && "flex-col"
				}`}
			>
				<div></div>
				<div
					className={`flex  ${
						!isMobile && "items-center justify-between"
					} gap-10 ${
						isMobile &&
						"flex-col fixed px-4 transition-all overflow-auto duration-300 z-10 pt-20 top-0 h-full w-full bg-white"
					} ${
						isMobile && isOpenMenu
							? "left-0"
							: isMobile && !isOpenMenu && "-left-full"
					}`}
				>
					{role === "customer" && (
						<div className={"flex flex-col gap-2"}>
							<Title className="text-base">Способ передвижения</Title>
							<div className="flex items-center gap-4">
								<Square
									onClick={() =>
										updateMovementMethod("DRIVING" as google.maps.TravelMode)
									}
									className={isCar ? active : hover}
								>
									<Car
										width={size}
										height={size}
										color={isCar ? colors.light : colors["dark-purple"]}
									/>
								</Square>
							</div>
						</div>
					)}
					<div
						className={`flex w-full ${!isMobile && "justify-between"} ${
							isMobile && "flex-col "
						}`}
					>
						<div className="flex flex-col gap-2">
							<div className={column}>
								<Title className="text-sm">Количество пунктов выдачи</Title>
								<span className="font-bold text-dark-purple">
									{quantityPoints}
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-dark-purple text-sm gap-2 flex items-center">
								Время доставки: <span>{"*выберите два маркера"}</span>
							</div>
							<div className="text-dark-purple text-sm  gap-2 flex items-center">
								Дистанция: <span>{"*выберите два маркера"}</span>
							</div>
							<div className="text-dark-purple text-sm  gap-2 flex items-center">
								Цена доставки: <span>{"*выберите два маркера"}</span>
							</div>
						</div>
						<div
							className={`flex ${!isMobile && "flex-col"} ${
								isMobile && "items-center"
							} gap-1`}
						>
							<Title className="text-base">Название пункта выдачи</Title>
							<span className="font-bold text-dark-purple text-right">
								{company_name}
							</span>
						</div>
					</div>
				</div>
				{isMobile && (
					<MenuButton
						isMenuOpen={isOpenMenu}
						updateIsMenuOpen={updateIsOpenMenu}
					/>
				)}
			</div>
		</>
	)
}

export default MapHeader
