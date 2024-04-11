/* eslint-disable import/no-anonymous-default-export */
import { DELETE, GET, POST, PUT } from "@/constants/constants"
import { InstanceService } from "./instance.service"
import { Product } from "@/types/auth.types"

export class CompaniesService extends InstanceService {
	// Работа с получением всех компаний продуктов компаний и тд
	async getAllCompanies(accessToken: string) {
		const response = await fetch(`${this.API_URL}/client/all_company`, {
			method: GET,
			headers: this.authHeaders(accessToken),
		})

		return response.json()
	}
	async getProductsFromCompanyId(companyId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/client/products_for_company/${companyId}`,
			{
				method: GET,
				headers: this.authHeaders(accessToken),
			}
		)

		return response.json()
	}
	async getProductById(productId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/client/product_for_company/${productId}`,
			{
				method: GET,
				headers: this.authHeaders(accessToken),
			}
		)

		return response.json()
	}

	// Работа с продуктами
	async createProduct(product: Omit<Product, "id">, accessToken: string) {
		const response = await fetch(`${this.API_URL}/company/add_product`, {
			method: POST,
			body: JSON.stringify({ ...product }),
			headers: this.authHeaders(accessToken),
		})
		return response.json()
	}
	async deleteProduct(productId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/company/delete_product/${productId}`,
			{
				method: DELETE,
				headers: this.authHeaders(accessToken),
			}
		)
		return response.json()
	}
	async updateProduct(
		productId: number,
		product: Omit<Product, "id">,
		accessToken: string
	) {
		const response = await fetch(
			`${this.API_URL}/company/update_product/${productId}`,
			{
				method: PUT,
				headers: this.authHeaders(accessToken),
				body: JSON.stringify({ ...product }),
			}
		)
		return response.json()
	}
}

export default new CompaniesService()
