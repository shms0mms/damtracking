import { FC } from "react"
import Title from "./Title"
import { Bus, Car, Footprints } from "lucide-react"
import { colors } from "../../../tailwind.config"
import Square from "./Square"
import useContext from "@/hooks/useContext"
import { CompanyContext } from "@/context/CompanyContext"
import { AppContext } from "@/context/AppProvider"
import { UserRole } from "@/types/auth.types"

const MapHeader: FC = ({}) => {
	const {
		quantityPoints,
		quantitySelectedPoints,
		movementMethod,
		updateMovementMethod,
	} = useContext(CompanyContext)
	const { user } = useContext(AppContext)
	const role: UserRole | undefined = user?.role
	const company_name = user?.company_name
	const size = 26
	const column = "flex items-center justify-between gap-2"
	const active = "bg-purple"
	const isCar = movementMethod === "car"
	const isBus = movementMethod === "bus"
	const isFoot = movementMethod === "foot"
	const hover = "hover:bg-violet-300 transition-all duration-300"
	return (
		<>
			<div className="flex flex-col gap-1 py-2 px-4">
				<div className="flex w-full justify-between gap-10">
					{role === "customer" && (
						<div className="flex flex-col gap-2">
							<Title className="text-base">Способ передвижения</Title>
							<div className="flex items-center gap-4">
								<Square
									onClick={() => updateMovementMethod("foot")}
									className={isFoot ? active : hover}
								>
									<Footprints
										width={size}
										height={size}
										color={isFoot ? colors.light : colors["dark-purple"]}
									/>
								</Square>
								<Square
									onClick={() => updateMovementMethod("car")}
									className={isCar ? active : hover}
								>
									<Car
										width={size}
										height={size}
										color={isCar ? colors.light : colors["dark-purple"]}
									/>
								</Square>
								<Square
									onClick={() => updateMovementMethod("bus")}
									className={isBus ? active : hover}
								>
									<Bus
										width={size}
										height={size}
										color={isBus ? colors.light : colors["dark-purple"]}
									/>
								</Square>
							</div>
						</div>
					)}
					<div className="flex w-full justify-between">
						<div className="flex flex-col gap-2">
							<div className={column}>
								<Title className="text-sm">
									Количество выбранных пунктов выдачи
								</Title>
								<span className="font-bold text-dark-purple">
									{quantitySelectedPoints}
								</span>
							</div>
							<div className={column}>
								<Title className="text-sm">
									Суммарное количество ваших пунктов выдачи
								</Title>
								<span className="font-bold text-dark-purple">
									{quantityPoints}
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-1">
							<Title className="text-base">Название пункта выдачи</Title>
							<span className="font-bold text-dark-purple text-right">
								{company_name}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MapHeader
