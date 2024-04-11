/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import authService from "@/services/auth.service"
import { UserCreate, UserLogin, UserUpdate } from "@/types/auth.types"
import { useLocalStorage } from "react-pcp-form"
import useContext from "./useContext"
import { AppContext } from "@/context/AppProvider"
import { useRouter } from "next/navigation"
import { routes } from "@/constants/routes.constants"

const useAuth = () => {
	const { get, remove, set } = useLocalStorage()
	const { updateAutheficated, updateUser, user } = useContext(AppContext)
	const { push } = useRouter()
	const login = async (user: UserLogin) => {
		const response = await authService.login(user)
		if (response.detail)
			return { http_code: 401, message: "Такого пользователя не существует" }
		if (response) set(ACCESS_TOKEN_NAME, response.token)
		return { http_code: 201, message: "Вы успешно вошли в аккаунт" }
	}
	const register = async (user: UserCreate) => {
		const response = await authService.register(user)

		if (response) set(ACCESS_TOKEN_NAME, response.token)

		if (response.detail)
			return { http_code: 401, message: "Такой пользователь уже существует" }

		return { http_code: 201, message: "Пользователь успешно создан" }
	}
	const me = async () => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await authService.me(accessToken)

			if (!response.detail) {
				updateUser(response)
				updateAutheficated(true)
			}
			return response
		}
	}

	const update = async (user: UserUpdate) => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await authService.update(user, accessToken)

			updateUser(response)

			if (response.detail)
				return { http_code: 500, message: "Неизввестная ошибка" }

			return { http_code: 200, message: "Пользователь успешно изменен" }
		}
	}

	const logout = () => {
		remove(ACCESS_TOKEN_NAME)
		updateAutheficated(false)

		updateUser(null)
		push(routes.login)
	}
	return { me, login, register, logout, update }
}

export default useAuth
