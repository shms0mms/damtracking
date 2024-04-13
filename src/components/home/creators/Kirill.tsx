import Round from "@/components/ui/Round"
import Title from "@/components/ui/Title"
import Image from "next/image"
import { FC } from "react"

const Kirill: FC = ({}) => {
	return (
		<div className="flex flex-col gap-5 items-center text-center">
			<Round className="p-5">
				<Image
					width={60}
					height={60}
					src={"/kirill.png"}
					className="overflow-hidden rounded-[50%]"
					alt="kirill"
				/>
			</Round>
			<Title>Разработчик части FrontEnd (тупо рисовальщик кнопок)</Title>
			<div className="font-semibold text-xl text-dark-purple relative">
				Кирилл (mms){" "}
				<div className="absolute top-[-5px] right-[-20px] opacity-60 text-purple text-xs">
					ТимЛид
				</div>
			</div>
		</div>
	)
}

export default Kirill
