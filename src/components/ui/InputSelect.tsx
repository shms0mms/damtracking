import { useEffect, useMemo, useRef, useState } from "react"
import { FieldsValues } from "react-pcp-form"
import ArrowDown from "./icons/ArrowDown"
import { colors } from "../../../tailwind.config"
import { ReactFunction } from "@/types/app.types"

export interface IInputSelect<FormData extends FieldsValues = object> {
	values: string[]
	name: keyof FormData
	value: string
	changeValue: ReactFunction<string>
}

const InputSelect = <FormData extends FieldsValues = object>({
	name,
	values,
	changeValue,
	value,
}: IInputSelect<FormData>) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const vals = useMemo(() => values, [values])
	return (
		<>
			<div className="relative w-full">
				<button
					type="button"
					name={name as string}
					onClick={() => setIsOpen(prev => !prev)}
					className="flex items-center gap-1 justify-between w-full"
				>
					<div className="bg-light text-left w-full rounded-md py-3 px-4">
						{value || values[0]}
					</div>
					<div
						className={`block transition-all absolute top-1/2 -translate-y-1/2 right-4 duration-300 ease-in-out ${
							isOpen ? "rotate-180" : "rotate-0"
						}`}
					>
						<ArrowDown height={24} width={24} color={colors.main} />
					</div>
				</button>
				<div
					ref={ref}
					className={`w-full overflow-hidden z-20 absolute top-[115%] left-0 bg-white shadow-2xl`}
				>
					<div
						style={{
							height:
								ref.current?.scrollHeight && isOpen
									? ref.current?.scrollHeight
									: 0,
							overflow:
								ref.current?.scrollHeight && isOpen ? "auto" : "visible",
							maxHeight: ref.current?.scrollHeight && isOpen ? 240 : "auto",
						}}
						className="w-full flex flex-col transition-all duration-300 ease-in-out"
					>
						{vals.map((v, pk) => (
							<button
								type="button"
								className="p-4 w-full rounded-sm text-left bg-white hover:bg-dark-purple text-dark-purple hover:text-white transition-all duration-300 ease-out"
								onClick={() => {
									changeValue(v)
									setIsOpen(prev => !prev)
								}}
								key={pk}
							>
								{v}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default InputSelect
