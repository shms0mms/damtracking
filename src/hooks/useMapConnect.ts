import { useEffect } from "react"

const useMapConnect = (initMap: () => void) => {
	// https://maps.googleapis.com/maps/api/directions/json?origin=43.65077%2C-79.378425&destination=43.63881%2C-79.42745&key=VALID_API_KEY
	useEffect(() => {
		if (!window.google) {
			const script = document.createElement("script")
			script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_APP_API_KEY}&callback=initMap`
			script.async = true
			script.defer = true
			document.body.appendChild(script)

			return () => {
				document.body.removeChild(script)
			}
		} else {
			initMap()
		}
	}, [])
}

export default useMapConnect
