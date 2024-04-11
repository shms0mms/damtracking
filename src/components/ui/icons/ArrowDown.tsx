"use client"
import { Icon } from "@/types/app.types"
import { FC } from "react"
const ArrowDown: FC<Icon> = ({ className, color, height, width }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				width={width || 16}
				height={height || 16}
				className={className}
			>
				<path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
			</svg>
		</>
	)
}

export default ArrowDown
