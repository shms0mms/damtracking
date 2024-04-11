import { ITextareaField } from "@/types/ui.types"
import { FieldsValues } from "react-pcp-form"
import FieldTitle from "./FieldTitle"

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
		..._props
	} = props
	return (
		<>
			<div>
				<FieldTitle name={name} isFocus={isFocus} placeholder={placeholder} />
				<textarea
					className={`field ${className}`}
					placeholder={isFocus === undefined ? placeholder : ""}
					{...register(name, params)}
					{..._props}
				/>
			</div>
		</>
	)
}

export default TextareaField
