import { ReactFunction } from "@/types/app.types"
import { FC, PropsWithChildren } from "react"
import Title from "./Title"
import Cross from "./icons/Cross"
export interface IModal {
	isOpen: boolean
	setIsOpen: ReactFunction<boolean>
	title: string
	text?: string
}
const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	isOpen,
	setIsOpen,
	title,
	text,
}) => {
	return (
		<div
			className={`p-4 fixed top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-transparent-black ${
				isOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
			}`}
		>
			<div className="relative bg-white rounded-md p-8">
				<button
					type="button"
					className="absolute top-2 right-2"
					onClick={() => setIsOpen(false)}
				>
					<Cross />
				</button>
				<div className="flex flex-col gap-6">
					<div>
						<Title className="text-lg text-center">{title}</Title>

						{!!text && (
							<div className="text-dark-purple text-xs font-semibold text-center opacity-50">
								{text}
							</div>
						)}
					</div>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal
