import { FC } from "react"
import Modal, { IModal } from "./Modal"
import { ReactFunction } from "@/types/app.types"

export interface IConfirm extends IModal {
	sendResult: ReactFunction<boolean>
}

const Confirm: FC<IConfirm> = props => {
	const { sendResult, setIsOpen, ..._props } = props
	const setTrue = () => {
		sendResult(true)
		setIsOpen(false)
	}
	const setFalse = () => {
		sendResult(false)
		setIsOpen(false)
	}
	const button = `transition-all duration-300 font-medium hover:text-dark-purple`
	return (
		<>
			<Modal setIsOpen={setIsOpen} {..._props}>
				<div className="flex items-center gap-10 justify-center">
					<button
						className={`text-red ${button}`}
						type="button"
						onClick={() => setFalse()}
					>
						Нет, вернуться
					</button>
					<button
						className={`text-green ${button}`}
						type="button"
						onClick={() => setTrue()}
					>
						Да, точно
					</button>
				</div>
			</Modal>
		</>
	)
}

export default Confirm
