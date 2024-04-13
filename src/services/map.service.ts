/* eslint-disable import/no-anonymous-default-export */
import { GET, POST } from "@/constants/constants"
import { InstanceService } from "./instance.service"
import { Address, Coords } from "@/types/map.types"

export class MapService extends InstanceService {
	async getAllPoints(companyId: number, accessToken: string) {
		const response = await fetch(
			`${this.API_URL}/client/points_for_company/${companyId}`,
			{
				method: GET,
				headers: this.authHeaders(accessToken),
			}
		)

		return response.json()
	}
	async getDataFromCoords(coords: Coords) {
		const response = await fetch(`${this.API_URL}/client/pay_for_distantion`, {
			method: POST,
			body: JSON.stringify({
				...coords,
			}),
			headers: this.headers,
		})

		return response.json()
	}
	async createAddress(address: Address, accessToken: string) {
		const response = await fetch(`${this.API_URL}/company/add_address`, {
			method: POST,
			body: JSON.stringify({ ...address }),
			headers: this.authHeaders(accessToken),
		})
		return response.json()
	}
	async getCompanyAddresses(accessToken: string) {
		const response = await fetch(`${this.API_URL}/company/my_address`, {
			method: GET,
			headers: this.authHeaders(accessToken),
		})
		return response.json()
	}
}

export default new MapService()
