"use client"
import { UserCreate } from "@/types/auth.types"
import { FC, useState } from "react"
import { Form, OnSubmitHandler, useForm, useLocalStorage } from "react-prp-form"
import InputField from "../ui/InputField"
import Title from "../ui/Title"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"
import Error from "../ui/Error"
import PasswordField from "./PasswordField"
import Loader from "../ui/Loader"
import { Toaster, toast } from "sonner"
import { colors } from "../../../tailwind.config"
import EmailField from "./EmailField"

const RegisterForm: FC = () => {
	const {
		handleSubmit,
		register,
		fields,
		formState: { errors, isLoading },
	} = useForm<UserCreate>({
		withLocalStorage: [
			"email",
			"first_name",
			"password",
			"role",
			"second_name",
			"third_name",
			"username",
			"company_name",
		],
		mode: "onSubmit",
	})
	const [formError, setFormError] = useState<string>()
	const { register: registry, me } = useAuth()
	const onSubmit: OnSubmitHandler<UserCreate> = async data => {
		const rsp = await registry({
			...data,
			role: "customer",
		})

		if (rsp.http_code === 401) {
			setFormError(rsp.message)
		} else {
			setFormError(undefined)
			toast("Вы успешно зарегистрировались")
		}
		await me()
	}

	return (
		<Form method="POST" handleSubmit={handleSubmit} onSubmitHandler={onSubmit}>
			<div className="flex flex-col gap-4 min-w-[479px]">
				<Title className="text-center">Регистрация</Title>
				<InputField
					name={"first_name"}
					register={register}
					isFocus={fields}
					placeholder="Ваше имя"
				/>
				<InputField
					name={"second_name"}
					register={register}
					placeholder="Ваша фамилия"
					isFocus={fields}
				/>
				<InputField
					name={"third_name"}
					register={register}
					placeholder="Ваше отчество"
					isFocus={fields}
				/>
				<InputField
					name={"username"}
					register={register}
					placeholder="Ваш логин"
					isFocus={fields}
				/>
				<EmailField
					fields={fields}
					register={register}
					error={errors && errors.email}
				/>
				<PasswordField
					fields={fields}
					register={register}
					error={errors && errors.password}
				/>
				{/* Выбор роли */}
				<InputField
					name={"company_name"}
					register={register}
					placeholder="Название вашей компании"
					isFocus={fields}
				/>

				<Error error={formError} />
				<Button disabled={isLoading} type="submit">
					{isLoading ? <Loader /> : "Зарегистрироваться"}
				</Button>
			</div>
		</Form>
	)
}

export default RegisterForm
