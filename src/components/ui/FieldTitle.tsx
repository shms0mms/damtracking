import { FC } from "react"
import { Fields, FieldsValues } from "react-pre-form"

export interface IFieldTitle<FormData extends FieldsValues = object> {
	isFocus?: Fields<FormData>
	placeholder?: string
	name: keyof FormData
}

const FieldTitle = <FormData extends FieldsValues = object>({
	isFocus,
	placeholder,
	name,
}: IFieldTitle<FormData>) => {
	const focused =
		(isFocus && isFocus[name] && isFocus[name].isFocus) ||
		(isFocus &&
			isFocus[name] &&
			!!isFocus[name].value &&
			!!isFocus[name].value.length)
	return (
		<>
			{isFocus !== undefined && (
				<span
					className={`absolute pointer-events-none opacity-60 transition-all ease-in-out duration-200 ${
						focused
							? "top-1 left-2 text-xs"
							: "top-1/2 -translate-y-1/2 left-4 text-sm"
					}`}
				>
					{placeholder}
				</span>
			)}
		</>
	)
}

export default FieldTitle
