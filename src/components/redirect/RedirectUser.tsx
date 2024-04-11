/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { AppContext } from "@/context/AppProvider"
import useAuthRedirect from "@/hooks/useAuthRedirect"
import useContext from "@/hooks/useContext"
import useCurrentUser from "@/hooks/useCurrentUser"
import { FC, useEffect } from "react"

const RedirectUser: FC = ({}) => {
	const { isAuth, user } = useContext(AppContext)

	const { setCurrentUser } = useCurrentUser()
	const { redirect } = useAuthRedirect()
	useEffect(() => {
		const func = async () => {
			const isAuth = await setCurrentUser()

			redirect(isAuth)
		}
		func()
	}, [isAuth, user?.id])

	return <></>
}

export default RedirectUser
