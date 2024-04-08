export interface AuthFormData {}

export interface User {
	id: number
	username: string
	first_name: string
	second_name: string
	third_name: string
	password: string
	role: "company" | "customer" // Компания или покупатель
}
