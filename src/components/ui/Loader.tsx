import { Loader2 } from "lucide-react"
import { FC } from "react"

export interface ILoader {
	size?: number
}

const Loader: FC<ILoader> = ({ size }) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<Loader2
				className="animate-spin"
				width={size || 16}
				height={size || 16}
			/>
		</div>
	)
}

export default Loader
