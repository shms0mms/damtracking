import { FieldState, FieldsValues, UpdateField } from "react-pcp-form"
import Button from "./Button"

export interface IButtonChangeValue<FormData extends FieldsValues = object> {
	updateField: UpdateField<FormData>
	field: FieldState
	name: keyof FormData
}

const ButtonChangeValue = <FormData extends FieldsValues = object>({
	field,
	updateField,
	name,
}: IButtonChangeValue<FormData>) => {
	return (
		<>
			<Button
				type="button"
				onClick={() =>
					updateField(name, {
						...field,
						value: "RandomValue",
					})
				}
			>
				Change value
			</Button>
		</>
	)
}

export default ButtonChangeValue
