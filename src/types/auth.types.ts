export type UserRole = "company" | "customer"
export interface User extends UserCreate {
	id: number
}
export interface UserLogin {
	password: string
	username: string
}
export interface UserCreate {
	email: string
	username: string
	first_name: string
	second_name: string
	third_name: string
	password: string
	role: UserRole // Компания или покупатель
}

export interface Token {
	token: string
}
