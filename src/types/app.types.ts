import React from "react"
export type ReactFunction<T> = React.Dispatch<React.SetStateAction<T>>
export interface UIComponent {
	className?: string
}
