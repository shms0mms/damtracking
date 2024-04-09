"use client"
import { useEffect, useState } from "react"

const useMediaQuery = (media: string) => {
	const [matches, setMatches] = useState<boolean>(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(media)
		const handler = () => {
			mediaQuery.matches ? setMatches(true) : setMatches(false)
		}
		handler()
		mediaQuery.addListener(handler)
		return () => mediaQuery.removeListener(handler)
	}, [])
	return { matches }
}

export default useMediaQuery
