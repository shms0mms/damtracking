"use client"
import { screens } from "@/constants/screens.constants"
import { useEffect, useState } from "react"
import useMediaQuery from "./useMediaQuery"
import { media } from "@/constants/media.constants"
const useScreen = () => {
	const [status, setStatus] = useState<"desktop" | "tablet" | "mobile">(
		"desktop"
	)

	const { matches: isMobileQuery } = useMediaQuery(media.mobile)
	const { matches: isTabletQuery } = useMediaQuery(media.small)
	const isWindow = typeof window !== "undefined"
	const isMobile =
		isWindow &&
		(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		) ||
			isMobileQuery)
	const isTablet =
		isWindow &&
		(/iPad|Android|Tablet/i.test(navigator.userAgent) || isTabletQuery)
	const isDesktop = !isMobile && !isTablet
	useEffect(() => {
		isMobile
			? setStatus(screens.mobile as "mobile")
			: isTablet
			? setStatus(screens.tablet as "tablet")
			: isDesktop && setStatus(screens.desktop as "desktop")
	}, [isMobile, isTablet, isDesktop])
	return status
}

export default useScreen
