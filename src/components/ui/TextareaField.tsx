import { ITextareaField } from "@/types/ui.types"
import { FieldsValues } from "react-pcp-form"
import FieldTitle from "./FieldTitle"
import Error from "./Error"

const TextareaField = <FormData extends FieldsValues = object>(
	props: ITextareaField<FormData>
) => {
	const {
		name,
		params,
		className,
		register,
		isFocus,
		placeholder,
		title,
		error,
		..._props
	} = props
	return (
		<>
			<div className="relative">
				<FieldTitle name={name} isFocus={isFocus} placeholder={placeholder} />
				<textarea
					className={`field ${className}`}
					placeholder={isFocus === undefined ? placeholder : ""}
					{...register(name, params)}
					{..._props}
				/>
				<Error className="absolute top-[105%] left-0" error={error} />
			</div>
		</>
	)
}

export default TextareaField
