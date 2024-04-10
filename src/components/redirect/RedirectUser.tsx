"use client"
import { AppContext } from "@/context/AppRrovider"
import useAuthRedirect from "@/hooks/useAuthRedirect"
import useContext from "@/hooks/useContext"
import useCurrentUser from "@/hooks/useCurrentUser"
import { FC, useEffect } from "react"

const RedirectUser: FC = ({}) => {
	const { isAuth, user } = useContext(AppContext)
	const { setCurrentUser } = useCurrentUser()
	useEffect(() => {
		setCurrentUser()
	}, [])
	useAuthRedirect(isAuth, user?.role)
	return <></>
}

export default RedirectUser
