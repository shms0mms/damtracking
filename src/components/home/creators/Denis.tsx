import Round from "@/components/ui/Round"
import Title from "@/components/ui/Title"
import Image from "next/image"
import { FC } from "react"

const Denis: FC = ({}) => {
	return (
		<div className="flex flex-col gap-5 items-center text-center">
			<Round className="p-5">
				<Image
					width={60}
					height={60}
					src={"/denis.png"}
					className="overflow-hidden rounded-[50%]"
					alt="Denis"
				/>
			</Round>
			<Title>Разработчик части BackEnd (одним словом Денис)</Title>
			<div className="font-semibold text-xl text-dark-purple">
				Денис (dambek)
			</div>
		</div>
	)
}

export default Denis
