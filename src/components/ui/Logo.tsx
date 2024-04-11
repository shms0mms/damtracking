import { FC } from "react"
import Title from "./Title"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import { AudioWaveform } from "lucide-react"
import { useMediaQuery } from "react-pcp-form"
import { media } from "@/constants/media.constants"
import Link from "next/link"
import { routes } from "@/constants/routes.constants"

const Logo: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	const { matches: isSmall } = useMediaQuery(media.small)
	return (
		<Link href={routes.home}>
			<Title>
				{isDecreased && !isSmall ? <AudioWaveform /> : "Damtracking"}
			</Title>
		</Link>
	)
}

export default Logo
