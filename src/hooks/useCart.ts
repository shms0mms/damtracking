"use client"
import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import cartService from "@/services/cart.service"
import { useLocalStorage } from "react-pcp-form"

const useCart = () => {
	const { get } = useLocalStorage()
	const getAllProducts = async () => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await cartService.getAllProducts(accessToken)
			console.log(response)

			return response
		}
	}
	const addProduct = async (productId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await cartService.addProduct(productId, accessToken)

			return response
		}
	}
	const deleteProduct = async (productId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await cartService.deleteProduct(productId, accessToken)

			return response
		}
	}
	return { getAllProducts, addProduct, deleteProduct }
}

export default useCart
