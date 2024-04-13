import { useMediaQuery } from "react-pcp-form"
import Block from "../Block"
import Denis from "./Denis"
import Kirill from "./Kirill"
import { media } from "@/constants/media.constants"

export default function Creators() {
	const { matches: isMobile } = useMediaQuery(media.mobile)
	const block = `${!isMobile && "flex-[0_1_50%]"} flex flex-col gap-5`
	return (
		<Block id="creators" title="Разработчики данного проекта">
			<div className={`flex gap-8 ${isMobile && "flex-col"}`}>
				<div className={block}>
					<Kirill />
				</div>
				<div className={block}>
					<Denis />
				</div>
			</div>
		</Block>
	)
}
