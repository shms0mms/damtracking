import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { Fields, FieldsValues, Register, RegisterParams } from "react-prp-form"

export type IField<FormData extends FieldsValues = object> = {
	register: Register<FormData>
	name: keyof FormData
	params?: RegisterParams
	isFocus?: Fields<FormData>
	error?: string
}

export interface IInputField<FormData extends FieldsValues = object>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "name">,
		IField<FormData> {}

export interface ITextareaField<FormData extends FieldsValues = object>
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">,
		IField<FormData> {}
