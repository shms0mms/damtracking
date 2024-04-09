import { Token, UserCreate, UserLogin } from "@/types/auth.types"
import { InstanseService } from "./instanse.service"
import { AxiosResponse } from "axios"

export class AuthService extends InstanseService {
	async login(user: UserLogin) {
		return await this.instanse.post<any, AxiosResponse<Token>, UserLogin>(
			"/auth/login",
			undefined,
			{
				data: { ...user },
			}
		)
	}
	async register(user: UserCreate) {
		return await this.instanse.post<any, AxiosResponse<Token>, UserCreate>(
			"/auth/register",
			undefined,
			{
				data: {
					...user,
				},
			}
		)
	}
	async auth(accessToken: string) {
		return await this.instanse.post("/auth/auth", undefined, {
			headers: {
				Authorization: accessToken,
			},
		})
	}
	async me() {
		return await this.instanse.get("/auth/me")
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService()
