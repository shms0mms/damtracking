import AppProvider from "@/context/AppRrovider"
import QueryProvider from "@/context/QueryProvider"
import { FC, PropsWithChildren } from "react"
import SideBar from "./sidebar/SideBar"

const BaseLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<QueryProvider>
			<AppProvider>
				<div className="flex">
					<SideBar />
					{children}
				</div>
			</AppProvider>
		</QueryProvider>
	)
}

export default BaseLayout
