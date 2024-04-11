import { ReactFunction } from "@/types/app.types"
import { createContext, useState } from "react"
export type MovementMethod = "foot" | "bus" | "car"
export type TCompanyContext = {
	quantityPoints: number
	updateQuantityPoints: ReactFunction<number>
	arrayCoords: number[][]
	updateArrayCoords: ReactFunction<number[][]>
	movementMethod: MovementMethod
	updateMovementMethod: ReactFunction<MovementMethod>
	quantitySelectedPoints: number
	updateQuantitySelectedPoints: ReactFunction<number>
}
export const CompanyContext = createContext<TCompanyContext | {}>({})

import { FC, PropsWithChildren } from "react"

const CompanyProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [quantityPoints, updateQuantityPoints] = useState<number>(0)
	const [quantitySelectedPoints, updateQuantitySelectedPoints] =
		useState<number>(0)
	const [arrayCoords, updateArrayCoords] = useState<number[][]>([])
	const [movementMethod, updateMovementMethod] =
		useState<MovementMethod>("foot")
	const value: TCompanyContext = {
		quantityPoints,
		updateQuantityPoints,
		arrayCoords,
		updateArrayCoords,
		movementMethod,
		updateMovementMethod,
		quantitySelectedPoints,
		updateQuantitySelectedPoints,
	}
	return (
		<CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
	)
}

export default CompanyProvider
