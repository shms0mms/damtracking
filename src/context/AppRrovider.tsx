"use client"
import { ReactFunction } from "@/types/app.types"
import { User } from "@/types/auth.types"
import { FC, PropsWithChildren, createContext, useState } from "react"

export type TAppContext = {
	isAuth: boolean
	updateAutheficated: ReactFunction<boolean>
	user: User | null
	updateUser: ReactFunction<User | null>
	isDecreased: boolean
	setIsDecreased: ReactFunction<boolean>
}
export const AppContext = createContext<TAppContext | {}>({})

const AppProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, updateUser] = useState<User | null>(null)
	const [isAuth, updateAutheficated] = useState(false)

	const [isDecreased, setIsDecreased] = useState(false)
	const value: TAppContext = {
		isAuth,
		updateAutheficated,
		user,
		updateUser,
		isDecreased,
		setIsDecreased,
	}
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
