"use client"
import { AppContext } from "@/context/AppRrovider"
import useAuthRedirect from "@/hooks/useAuthRedirect"
import useContext from "@/hooks/useContext"

export default function HomeScreen() {
	const { isAuth, user } = useContext(AppContext)
	useAuthRedirect(isAuth, user?.role)
	return <></>
}
