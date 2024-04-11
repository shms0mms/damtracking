import { IInputField } from "@/types/ui.types"
import { FieldsValues } from "react-pcp-form"
import FieldTitle from "./FieldTitle"
import Error from "./Error"

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
			<div className="relative w-full flex flex-col gap-1">
				<FieldTitle name={name} isFocus={isFocus} placeholder={placeholder} />
				<input
					{...register(name, params)}
					className={`field ${className}`}
					placeholder={isFocus === undefined ? placeholder : ""}
					type={type || "text"}
					{..._props}
				/>
				<Error className="absolute top-[105%] left-0" error={error} />
			</div>
		</>
	)
}

export default InputField
