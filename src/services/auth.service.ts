import { GET, POST } from "@/constants/constants"
import { UserCreate, UserLogin } from "@/types/auth.types"
export class AuthService {
	private headers = {
		"Content-type": "application/json; charset=UTF-8",
	}
	private API_URL =
		process.env.NEXT_PUBLIC_APP_API_URL ?? "http://localhost:8000"
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
		if (accessToken) {
			const response = await fetch(`${this.API_URL}/auth/me`, {
				method: GET,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			return response.json()
		}
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService()
