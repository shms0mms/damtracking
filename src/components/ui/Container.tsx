import { FC, PropsWithChildren } from "react"

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className="px-4 w-full h-full">{children}</div>
}

export default Container
