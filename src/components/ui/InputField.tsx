import { IInputField } from "@/types/ui.types"
import { FieldsValues } from "react-pre-form"
import FieldTitle from "./FieldTitle"

const InputField = <FormData extends FieldsValues = object>(
	props: IInputField<FormData>
) => {
	const {
		name,
		params,
		register,
		className,
		type,
		isFocus,
		placeholder,
		error,
		..._props
	} = props
	return (
		<>
			<div className="relative flex flex-col gap-1">
				<FieldTitle name={name} isFocus={isFocus} placeholder={placeholder} />
				<input
					{...register(name, params)}
					className={`field ${className}`}
					placeholder={isFocus === undefined ? placeholder : ""}
					type={type || "text"}
					{..._props}
				/>
				{!!error && (
					<div className="text-red-500 font-semibold text-xs">{error}</div>
				)}
			</div>
		</>
	)
}

export default InputField
