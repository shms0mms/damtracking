import { FC, useState } from "react"
import { Fields, FieldsValues, Register } from "react-pcp-form"
import InputField from "../ui/InputField"
import PasswordVisibillity from "../ui/PasswordVisibillity"
import { EMAIL_REGEXP } from "@/constants/constants"
import { IPasswordField } from "./PasswordField"

const EmailField = <FormData extends FieldsValues = object>({
	register,
	fields,
	error,
}: IPasswordField<FormData>) => {
	return (
		<>
			<InputField
				name={"email"}
				register={register}
				placeholder="Ваш Email"
				isFocus={fields}
				params={{
					regex: {
						value: EMAIL_REGEXP,
						message: "Email не валиден",
					},
				}}
				error={error}
			/>
		</>
	)
}

export default EmailField
