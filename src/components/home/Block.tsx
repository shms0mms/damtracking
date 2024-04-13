import Title from "../ui/Title"
import Container from "../ui/Container"
import { FC, PropsWithChildren } from "react"
interface IBlock {
	title: string
	id: string
}
const Block: FC<PropsWithChildren<IBlock>> = ({ title, children, id }) => {
	return (
		<div id={id}>
			<Container>
				<div className="flex flex-col gap-10">
					<Title className="text-center text-4xl">{title}</Title>
					{children}
				</div>
			</Container>
		</div>
	)
}

export default Block
