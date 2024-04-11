/* eslint-disable import/no-anonymous-default-export */
import { DELETE, GET, POST } from "@/constants/constants"
import { InstanceService } from "./instance.service"

export class CartService extends InstanceService {
	async getAllProducts(accessToken: string) {
		const response = await fetch(`${this.API_URL}/client/products/basket`, {
			method: GET,
			headers: this.authHeaders(accessToken),
		})

		return response.json()
	}
	async addProduct(productId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/client/add/product/${productId}`,
			{
				method: POST,
				headers: this.authHeaders(accessToken),
			}
		)
		return response.json()
	}
	async deleteProduct(productId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/client/delete/product/${productId}`,
			{
				method: DELETE,
				headers: this.authHeaders(accessToken),
			}
		)
		return response.json()
	}
}

export default new CartService()
