import { GET, POST, PUT } from "@/constants/constants"
import { UserCreate, UserLogin, UserUpdate } from "@/types/auth.types"
import { InstanceService } from "./instance.service"
export class AuthService extends InstanceService {
	async login(user: UserLogin) {
		const response = await fetch(`${this.API_URL}/auth/login`, {
			method: POST,
			body: JSON.stringify({ ...user }),
			headers: this.headers,
		})
		return response.json()
	}
	async register(user: UserCreate) {
		const response = await fetch(`${this.API_URL}/auth/register`, {
			method: POST,
			body: JSON.stringify({ ...user }),
			headers: this.headers,
		})

		return response.json()
	}

	async me(accessToken: string) {
		const response = await fetch(`${this.API_URL}/auth/me`, {
			method: GET,
			headers: this.authHeaders(accessToken),
		})
		return response.json()
	}

	async update(user: UserUpdate, accessToken: string) {
		const response = await fetch(`${this.API_URL}/auth/update_me`, {
			method: PUT,
			body: JSON.stringify({ ...user }),
			headers: this.authHeaders(accessToken),
		})

		return response.json()
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService()
