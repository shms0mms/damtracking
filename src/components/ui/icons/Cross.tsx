import { Icon } from "@/types/app.types"
import { FC } from "react"

const Cross: FC<Icon> = ({ className, color, height, width }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				width={width || 26}
				height={height || 26}
				className={className}
			>
				<path fill={"none"} d="M0 0h24v24H0z" />
				<path d="M12 10.586l5.293-5.293 1.414 1.414L13.414 12l5.293 5.293-1.414 1.414L12 13.414l-5.293 5.293-1.414-1.414L10.586 12 5.293 6.707l1.414-1.414L12 10.586z" />
			</svg>
		</>
	)
}

export default Cross
