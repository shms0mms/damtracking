import { ReactFunction } from "@/types/app.types"
import { createContext, useState } from "react"
export type MovementMethod = "CAR" | "BUS"
export type TCompanyContext = {
	quantityPoints: number
	updateQuantityPoints: ReactFunction<number>
	arrayCoords: number[][]
	updateArrayCoords: ReactFunction<number[][]>
	movementMethod: MovementMethod
	updateMovementMethod: ReactFunction<MovementMethod>
	quantitySelectedPoints: number
	updateQuantitySelectedPoints: ReactFunction<number>
	distantion: number
	setDistation: ReactFunction<number>
	price: number
	setPrice: ReactFunction<number>
	time: number
	setTime: ReactFunction<number>
}
export const CompanyContext = createContext<TCompanyContext | {}>({})

import { FC, PropsWithChildren } from "react"

const CompanyProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [quantityPoints, updateQuantityPoints] = useState<number>(0)
	const [quantitySelectedPoints, updateQuantitySelectedPoints] =
		useState<number>(0)
	const [arrayCoords, updateArrayCoords] = useState<number[][]>([])
	const [price, setPrice] = useState(0)
	const [time, setTime] = useState(0)
	const [distantion, setDistation] = useState(0)
	const [movementMethod, updateMovementMethod] = useState<MovementMethod>("CAR")
	const value: TCompanyContext = {
		quantityPoints,
		updateQuantityPoints,
		arrayCoords,
		updateArrayCoords,
		movementMethod,
		updateMovementMethod,
		quantitySelectedPoints,
		updateQuantitySelectedPoints,
		price,
		setPrice,
		time,
		setTime,
		distantion,
		setDistation,
	}
	return (
		<CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
	)
}

export default CompanyProvider
