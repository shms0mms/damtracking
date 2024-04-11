"use client"
import AppProvider from "@/context/AppProvider"
import { FC, PropsWithChildren } from "react"
import SideBar from "./sidebar/SideBar"
import RedirectUser from "./redirect/RedirectUser"
import MapHeader from "./ui/MapHeader"
import CompanyProvider from "@/context/CompanyContext"
import Header from "./ui/Header"
import CartProvider from "@/context/CartContext"
interface IBaseLayout {
	withMH?: boolean
	withSB?: boolean
	withH?: boolean
}
const BaseLayout: FC<PropsWithChildren<IBaseLayout>> = ({
	children,
	withMH,
	withSB,
	withH,
}) => {
	return (
		<AppProvider>
			<CompanyProvider>
				<CartProvider>
					{withH && <Header />}
					<div className="flex h-full w-full">
						{(withSB === undefined || withSB === true) && <SideBar />}
						<div className={`w-full h-full ${withMH && "flex flex-col"}`}>
							{withMH && <MapHeader />}
							{children}
						</div>
					</div>
					<RedirectUser />
				</CartProvider>
			</CompanyProvider>
		</AppProvider>
	)
}

export default BaseLayout
