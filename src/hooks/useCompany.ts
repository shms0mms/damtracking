"use client"
import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import companiesService from "@/services/companies.service"
import { Product } from "@/types/auth.types"
import { useLocalStorage } from "react-pcp-form"

const useCompany = () => {
	const { get } = useLocalStorage()

	const getAllCompanies = async () => {
		const accessToken = get(ACCESS_TOKEN_NAME)

		if (accessToken) {
			const response = await companiesService.getAllCompanies(accessToken)

			return response
		}
	}
	const createProduct = async (product: Omit<Product, "id">) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.createProduct(
				product,
				accessToken
			)
			return response
		}
	}
	const deleteProduct = async (productId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.deleteProduct(
				productId,
				accessToken
			)
			return response
		}
	}
	const updateProduct = async (
		productId: number,
		product: Omit<Product, "id">
	) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.updateProduct(
				productId,
				product,
				accessToken
			)
			return response
		}
	}
	const getProductById = async (productId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.getProductById(
				productId,
				accessToken
			)
			return response
		}
	}
	const getProductsFromCompanyId = async (companyId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.getProductsFromCompanyId(
				companyId,
				accessToken
			)
			return response
		}
	}
	const getMyProducts = async () => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await companiesService.getMyProducts(accessToken)

			return response
		}
	}
	return {
		getAllCompanies,
		createProduct,
		deleteProduct,
		updateProduct,
		getProductById,
		getProductsFromCompanyId,
		getMyProducts,
	}
}

export default useCompany
