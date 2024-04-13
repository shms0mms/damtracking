import { FC, ReactNode } from "react"
import Round from "../../ui/Round"
import Title from "../../ui/Title"

export interface IAdvantagesItem {
	title: string
	icon: ReactNode
}

const AdvantagesItem: FC<IAdvantagesItem> = ({ icon, title }) => {
	return (
		<div className="flex text-center flex-col items-center gap-8">
			<Round>{icon}</Round>
			<Title className="text-xl">{title}</Title>
		</div>
	)
}

export default AdvantagesItem
