import { FC, useState } from "react"
import { Fields, FieldsValues, Register } from "react-pcp-form"
import InputField from "../ui/InputField"
import PasswordVisibillity from "../ui/PasswordVisibillity"

export interface IPasswordField<FormData extends FieldsValues = object> {
	register: Register<FormData>
	fields: Fields<FormData>
	error?: string
}

const PasswordField = <FormData extends FieldsValues = object>({
	register,
	fields,
	error,
}: IPasswordField<FormData>) => {
	const [isHidden, updateIsHidden] = useState(true)
	return (
		<>
			<div className="relative">
				<InputField
					name={"password"}
					register={register}
					placeholder="Пароль (не менее 6 символов)"
					type={isHidden ? "password" : "text"}
					isFocus={fields}
					params={{
						minLength: {
							value: 6,
							message: "Пароль должен быть не менее 6 символов",
						},
					}}
					error={error}
				/>
				<div className="absolute top-1/2 -translate-y-1/2 right-4">
					<PasswordVisibillity
						isHidden={isHidden}
						updateIsHidden={updateIsHidden}
					/>
				</div>
			</div>
		</>
	)
}

export default PasswordField
