export class InstanceService {
	API_URL = process.env.NEXT_PUBLIC_APP_API_URL ?? "http://localhost:8000"
	headers = {
		"Content-type": "application/json; charset=UTF-8",
	}
	authHeaders(accessToken: string) {
		return {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": "application/json; charset=UTF-8",
		}
	}
}
