import { Loader2 } from "lucide-react"
import { FC } from "react"

export interface ILoader {
	size?: number
}

const Loader: FC<ILoader> = ({ size }) => {
	return (
		<>
			<Loader2
				className="animate-spin"
				width={size || 16}
				height={size || 16}
			/>
		</>
	)
}

export default Loader
