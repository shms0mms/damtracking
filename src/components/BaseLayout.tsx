import QueryProvider from "@/context/QueryProvider"
import { FC, PropsWithChildren } from "react"

const BaseLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <QueryProvider>{children}</QueryProvider>
}

export default BaseLayout
