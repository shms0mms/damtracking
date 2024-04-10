"use client"
import { UserLogin } from "@/types/auth.types"
import { FC, useState } from "react"
import { Form, OnSubmitHandler, useForm } from "react-prp-form"
import InputField from "../ui/InputField"
import Title from "../ui/Title"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"
import Error from "../ui/Error"
import PasswordField from "../register/PasswordField"
import Loader from "../ui/Loader"
import { toast } from "sonner"
import AuthToaster from "../ui/AuthToaster"
import EmailField from "../register/EmailField"

const LoginForm: FC = () => {
	const {
		handleSubmit,
		register,
		fields,
		formState: { errors, isLoading },
	} = useForm<UserLogin>({
		withLocalStorage: ["password", "email"],
		mode: "onSubmit",
	})

	const [formError, setFormError] = useState<string>()
	const { login, me } = useAuth()
	const onSubmit: OnSubmitHandler<UserLogin> = async data => {
		const rsp = await login({
			...data,
		})

		if (rsp.http_code === 401) setFormError(rsp.message)
		else {
			await me()
			toast("Вы успешно вошли в аккаунт")
			setFormError(undefined)
		}
	}

	return (
		<Form method="POST" handleSubmit={handleSubmit} onSubmitHandler={onSubmit}>
			<div className="flex flex-col gap-4 min-w-[479px]">
				<Title className="text-center">Вход</Title>

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
				<Error error={formError} />
				<Button disabled={isLoading} type="submit">
					{isLoading ? <Loader /> : "Войти"}
				</Button>
			</div>
			<AuthToaster />
		</Form>
	)
}

export default LoginForm
