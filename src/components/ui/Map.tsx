"use client"
import React, { useEffect, useState } from "react"

interface LatLng {
	lat: number
	lng: number
}

function Map(): JSX.Element {
	const [map, setMap] = useState<google.maps.Map | null>(null)

	function initMap(): void {
		const mapInstance = new window.google.maps.Map(
			document.getElementById("map") as HTMLElement,
			{
				center: { lat: 32.764, lng: 80 },
				zoom: 3,
			}
		)

		mapInstance.addListener("click", (event: google.maps.MouseEvent) => {
			placeMarker(event.latLng)
		})
		setMap(mapInstance)
	}

	function placeMarker(location: google.maps.LatLng): void {
		const marker = new window.google.maps.Marker({
			position: location,
			map: map as google.maps.Map<Element>,
		})
		console.log(marker)

		console.log("Latitude: " + location.lat() + " Longitude: " + location.lng())
	}

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

	useEffect(() => {
		// @ts-ignore
		window["initMap"] = initMap
	}, [])

	return <div id="map" style={{ height: "100%", width: "100%" }} />
}

export default Map
