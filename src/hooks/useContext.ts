import { Context, useContext as useReactContext } from "react"

const useContext = <T>(ctx: Context<T | {}>) =>
	useReactContext(ctx as Context<T>)
export default useContext
