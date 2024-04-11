import { FC, PropsWithChildren } from "react"

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className="p-4 max-w-[1440px] m-[0_auto] w-full h-full">
			{children}
		</div>
	)
}

export default Container
