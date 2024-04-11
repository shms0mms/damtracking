export type UserRole = "company" | "customer"
export interface User extends UserCreate {
	id: number
}
export interface UserLogin {
	password: string
	email: string
}
export interface UserCreate {
	email: string
	username: string
	first_name: string
	second_name: string
	third_name: string
	password: string
	company_name: string
	role: UserRole // Компания или покупатель
}
export interface UserUpdate extends Omit<UserCreate, "password" | "role"> {}
export interface Company extends Omit<User, "password" | "role"> {}
export interface ProductWithoutID extends Omit<Product, "id"> {}
export interface Product {
	id: number
	title: string
	price: number
	desc: string
}
export interface Token {
	token: string
}
