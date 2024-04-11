import { FC } from "react"

export interface IConfirm {
	title: string
	text?: string
}

const Confirm: FC<IConfirm> = ({ title, text }) => {
	return (
		<>
			<div></div>
		</>
	)
}

export default Confirm
