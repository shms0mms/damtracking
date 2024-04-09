import { ReactFunction } from "@/types/app.types"
import { Eye, EyeOff } from "lucide-react"
import { FC } from "react"

export interface IPasswordVisibillity {
	isHidden: boolean
	updateIsHidden: ReactFunction<boolean>
}

const PasswordVisibillity: FC<IPasswordVisibillity> = ({
	isHidden,
	updateIsHidden,
}) => {
	const size = 16
	return (
		<button type="button" onClick={() => updateIsHidden(!isHidden)}>
			{isHidden ? (
				<EyeOff width={size} height={size} />
			) : (
				<Eye width={size} height={size} />
			)}
		</button>
	)
}

export default PasswordVisibillity
