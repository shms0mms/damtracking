import { User } from "@/types/auth.types"

export default [
	{
		company_name: "Доставка.ру",
		email: "dostavka@mail.ru",
		first_name: "Владимир",
		id: 1,
		second_name: "Сидоров",
		third_name: "Владимирович",
		username: "vladimir321",
	},
	{
		company_name: "Атрибуты современного",
		email: "attributes1@mail.ru",
		first_name: "Анатолий",
		id: 2,
		second_name: "Двилов",
		third_name: "Владимирович",
		username: "attribut1",
	},
	{
		company_name: "E-dostavka",
		email: "e-username@mail.ru",
		first_name: "Александр",
		id: 3,
		second_name: "Малинов",
		third_name: "Анатольевич",
		username: "alex324098",
	},
] as Omit<User, "password" | "role">[]
