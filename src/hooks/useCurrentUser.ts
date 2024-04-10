import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import { useLocalStorage } from "react-prp-form"
import useContext from "./useContext"
import { AppContext } from "@/context/AppRrovider"
import useAuth from "./useAuth"

const useCurrentUser = () => {
	const { updateUser, user } = useContext(AppContext)
	const { me } = useAuth()
	const setCurrentUser = async () => {
		updateUser(await me())
	}
	const getCurrentUser = async () => {
		return user
	}
	return { setCurrentUser, getCurrentUser }
}

export default useCurrentUser
