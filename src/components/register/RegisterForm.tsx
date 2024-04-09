"use client"
import { UserCreate } from "@/types/auth.types"
import { FC, useState } from "react"
import { Form, OnSubmitHandler, useForm } from "react-pre-form"
import InputField from "../ui/InputField"
import PasswordVisibillity from "../ui/PasswordVisibillity"
import Button from "../ui/Button"
import Title from "../ui/Title"

const RegisterForm: FC = () => {
	const {
		handleSubmit,
		register,
		fields,
		formState: { errors },
	} = useForm<UserCreate>({
		withLocalStorage: [
			"email",
			"first_name",
			"password",
			"role",
			"second_name",
			"third_name",
			"username",
		],
		mode: "onSubmit",
	})
	const [isHidden, updateIsHidden] = useState(true)
	const onSubmit: OnSubmitHandler<UserCreate> = data => {
		console.log(data)
	}

	return (
		<Form handleSubmit={handleSubmit} onSubmitHandler={onSubmit}>
			<div className="flex flex-col gap-2">
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
				<InputField
					name={"email"}
					register={register}
					placeholder="Ваша почта"
					isFocus={fields}
				/>
				<div className="relative">
					<InputField
						name={"password"}
						register={register}
						placeholder="Пароль (не менее 8 символов)"
						type={isHidden ? "password" : "text"}
						isFocus={fields}
						params={{
							minLength: {
								value: 8,
								message: "Пароль должен быть не менее 8 символов",
							},
						}}
						error={errors && errors.password}
					/>
					<div className="absolute top-1/2 -translate-y-1/2 right-4">
						<PasswordVisibillity
							isHidden={isHidden}
							updateIsHidden={updateIsHidden}
						/>
					</div>
				</div>
				<Button>Зарегистрироваться</Button>
			</div>
		</Form>
	)
}

export default RegisterForm
