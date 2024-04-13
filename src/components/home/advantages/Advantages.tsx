"use client"
import { Accessibility, CheckCheck, Truck } from "lucide-react"
import AdvantagesItem from "./AdvantagesItem"
import Block from "../Block"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"

export default function Advantages() {
	const { matches: isMobile } = useMediaQuery(media.mobile)
	return (
		<Block id="advantages" title="Наши преимущества">
			<div
				className={`grid ${
					isMobile ? "grid-cols-template" : "grid-cols-template2"
				} justify-center gap-5`}
			>
				<AdvantagesItem title={"Доставка по всей россии"} icon={<Truck />} />
				<AdvantagesItem title={"Удобство пользования"} icon={<CheckCheck />} />
				<AdvantagesItem
					title={"Удобный рассчет расстояния от пункта выдачи до вас"}
					icon={<Accessibility />}
				/>
			</div>
		</Block>
	)
}
