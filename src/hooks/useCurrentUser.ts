import useContext from "./useContext"
import { AppContext } from "@/context/AppProvider"
import useAuth from "./useAuth"

const useCurrentUser = () => {
	const { updateUser, user } = useContext(AppContext)
	const { me } = useAuth()
	const setCurrentUser = async () => {
		const user = await me()

		updateUser(user || null)

		return user?.id ? true : false
	}
	const getCurrentUser = async () => {
		return user
	}
	return { setCurrentUser, getCurrentUser }
}

export default useCurrentUser
