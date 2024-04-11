"use client"
import { UserUpdate } from "@/types/auth.types"
import { FC } from "react"
import { OnSubmitHandler, useForm, useMediaQuery } from "react-pcp-form"
import InputField from "../ui/InputField"
import useAuth from "@/hooks/useAuth"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import Title from "../ui/Title"
import { media } from "@/constants/media.constants"
import Button from "../ui/Button"
import EmailField from "../register/EmailField"
import AuthToaster from "../ui/AuthToaster"
import { toast } from "sonner"

const SettingsForm: FC = ({}) => {
	const { user } = useContext(AppContext)
	const {
		register,
		handleSubmit,
		fields,
		formState: { errors },
	} = useForm<UserUpdate>({
		defaultValues: {
			company_name: user?.company_name,
			email: user?.email,
			first_name: user?.first_name,
			second_name: user?.second_name,
			third_name: user?.third_name,
			username: user?.username,
		},
		withLocalStorage: [
			"company_name",
			"email",
			"first_name",
			"second_name",
			"third_name",
			"username",
		],
		withStorageMode: "onSubmit",
		mode: "onChange",
	})
	const { update, me } = useAuth()

	const onSubmit: OnSubmitHandler<UserUpdate> = async data => {
		const response = await update(data)

		if (response?.http_code === 200) {
			await me()
			toast("Данные успешно изменены")
		}
	}

	const { matches: isSmall } = useMediaQuery(media.small)
	const column = `flex items-center gap-5 w-full ${isSmall && "flex-col"}`
	return (
		<form
			method="POST"
			className="w-full h-full flex flex-col items-end gap-5"
			onSubmit={e => handleSubmit(e, onSubmit)}
		>
			<div className="flex flex-col gap-8 w-full h-full flex-[1_1_auto]">
				<Title>Настройки вашего профиля</Title>
				<div className={column}>
					<EmailField
						fields={fields}
						register={register}
						error={errors && errors.email}
					/>
					<InputField
						register={register}
						name={"username"}
						isFocus={fields}
						placeholder="Ваш логин"
					/>
				</div>
				<div className={column}>
					<InputField
						register={register}
						name={"first_name"}
						isFocus={fields}
						placeholder="Ваше имя"
					/>
					<InputField
						register={register}
						name={"second_name"}
						isFocus={fields}
						placeholder="Ваша фамилия"
					/>
				</div>
				<div className={`${!isSmall && "w-[calc(50%-10px)]"}`}>
					<InputField
						register={register}
						name={"third_name"}
						isFocus={fields}
						placeholder="Ваше отчество"
					/>
				</div>
				{user?.role === "company" && (
					<div className={column}>
						<InputField
							register={register}
							name={"company_name"}
							isFocus={fields}
							placeholder="Название компании"
						/>
					</div>
				)}
			</div>
			<Button type="submit">Сохранить</Button>
			<AuthToaster />
		</form>
	)
}

export default SettingsForm
