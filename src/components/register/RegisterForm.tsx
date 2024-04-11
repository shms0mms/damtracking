"use client"
import { UserCreate } from "@/types/auth.types"
import { FC, useState } from "react"
import { Form, OnSubmitHandler, useForm, useMediaQuery } from "react-pcp-form"
import InputField from "../ui/InputField"
import Title from "../ui/Title"
import Button from "../ui/Button"
import useAuth from "@/hooks/useAuth"
import Error from "../ui/Error"
import PasswordField from "./PasswordField"
import Loader from "../ui/Loader"
import { toast } from "sonner"
import EmailField from "./EmailField"
import { useRouter } from "next/navigation"
import { routes } from "@/constants/routes.constants"
import Link from "../ui/Link"
import InputSelect from "../ui/InputSelect"
import AuthToaster from "../ui/AuthToaster"
import { media } from "@/constants/media.constants"

const RegisterForm: FC = () => {
	const {
		handleSubmit,
		register,
		fields,
		updateField,
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
	const [roleValue, changeRoleValue] = useState<string>("")
	const [formError, setFormError] = useState<string>()
	const { register: registry, me } = useAuth()
	const { push } = useRouter()

	const onSubmit: OnSubmitHandler<UserCreate> = async data => {
		updateField("role", {
			error: undefined,
			isFocus: false,
			isInvalid: false,
			isTouched: false,
			isValid: true,
			value: roleValue,
			params: {},
		})
		const rsp = await registry({
			...data,
			role: roleValue === "Покупатель" ? "customer" : "company",
		})
		if (rsp.http_code === 401) {
			setFormError(rsp.message)
		} else {
			const user = await me()
			setFormError(undefined)
			toast("Вы успешно зарегистрировались")
			setTimeout(() => {
				if (user?.role === "customer") push(routes.companies)
				else if (user?.role === "company") push(routes.select)
			}, 2000)
		}
	}
	const { matches: isMobile } = useMediaQuery(media.mobile)
	return (
		<form
			method="POST"
			className="min-w-full flex items-center justify-center min-h-full py-10"
			onSubmit={e => handleSubmit(e, onSubmit)}
		>
			<div
				className={`flex flex-col gap-4 ${
					!isMobile ? "min-w-[479px]" : "min-w-full"
				}`}
			>
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

				<InputSelect<UserCreate>
					name={"role"}
					values={["Компания", "Покупатель"]}
					changeValue={changeRoleValue}
					value={roleValue}
				/>
				{(roleValue === "Компания" || roleValue === "") && (
					<InputField
						name={"company_name"}
						register={register}
						placeholder="Название вашей компании"
						isFocus={fields}
					/>
				)}
				<Error error={formError} />
				<Button disabled={isLoading} type="submit">
					{isLoading ? <Loader /> : "Зарегистрироваться"}
				</Button>
				<Link href={routes.login}>
					Уже есть аккаунт? <span className="text-dark-purple">Войти</span>
				</Link>
			</div>
			<AuthToaster />
		</form>
	)
}

export default RegisterForm
