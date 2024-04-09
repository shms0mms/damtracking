/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import { authKeys } from "@/constants/keys.constants"
import authService from "@/services/auth.service"
import { UserCreate, UserLogin } from "@/types/auth.types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useLocalStorage } from "react-pre-form"
import useContext from "./useContext"
import { AppContext } from "@/context/AppRrovider"

const useAuth = () => {
	const { get, remove, set } = useLocalStorage()
	const { updateAutheficated, updateUser } = useContext(AppContext)
	const login = (user: UserLogin) => {
		const response = useMutation({
			mutationFn: () => authService.login(user),
			mutationKey: [authKeys.login],
		})
		set(ACCESS_TOKEN_NAME, response.data?.data)

		return response
	}
	const register = (user: UserCreate) => {
		const response = useMutation({
			mutationFn: () => authService.register(user),
			mutationKey: [authKeys.register],
		})

		set(ACCESS_TOKEN_NAME, response.data?.data)

		return response
	}
	const me = () => {
		const response = useQuery({
			queryKey: [authKeys.me],
			queryFn: () => authService.me(),
		})
		updateUser(response.data?.data)
	}
	const auth = () => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		const response = useMutation({
			mutationFn: () => authService.auth(accessToken),
		})
		updateAutheficated(true)

		return response
	}
	const logout = () => {
		remove(ACCESS_TOKEN_NAME)
		updateAutheficated(false)
	}
	return { auth, me, login, register, logout }
}

export default useAuth
