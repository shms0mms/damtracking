"use client"
import AppProvider from "@/context/AppRrovider"
import { FC, PropsWithChildren } from "react"
import SideBar from "./sidebar/SideBar"
import RedirectUser from "./redirect/RedirectUser"

const BaseLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<AppProvider>
			<div className="flex h-full w-full">
				<SideBar />
				{children}
			</div>
			<RedirectUser />
		</AppProvider>
	)
}

export default BaseLayout
