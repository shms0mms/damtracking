import { FC } from "react"
import Title from "./Title"
import useContext from "@/hooks/useContext"
import { AppContext } from "@/context/AppProvider"
import { AudioWaveform } from "lucide-react"

const Logo: FC = ({}) => {
	const { isDecreased } = useContext(AppContext)
	return <Title>{isDecreased ? <AudioWaveform /> : "Damtracking"}</Title>
}

export default Logo
