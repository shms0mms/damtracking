import axios from "axios"

export class InstanseService {
	instanse = axios.create({
		baseURL: process.env.API_URL ?? "http://localhost:8000",
	})
}
