"use client"
import { useEffect, useRef } from "react"
import { Fields, FieldsValues } from "react-pcp-form"

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
		(isFocus &&
			isFocus[name] &&
			!!isFocus[name].value &&
			!!isFocus[name].value.length) ||
		(isFocus && isFocus[name] && isFocus[name].isFocus)
	const ref = useRef<HTMLInputElement | null>(null)
	useEffect(() => {
		if (ref.current) {
			const style = ref.current.style
			style.top = focused ? "2px" : "20px"
			style.transform = focused ? "translateY(0)" : "translateY(-50%)"
			style.left = focused ? "6px" : "16px"
			style.fontSize = focused ? "10px" : "14px"
		}
	}, [focused])
	return (
		<>
			{isFocus !== undefined && (
				<span
					ref={ref}
					className={`absolute pointer-events-none opacity-60 transition-all ease-in-out duration-200`}
				>
					{placeholder}
				</span>
			)}
		</>
	)
}

export default FieldTitle
