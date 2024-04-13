"use client"
import useMap from "@/hooks/useMap"
import { Address } from "@/types/map.types"
import React, { FC, useCallback, useEffect, useState } from "react"
import Button from "./Button"
import useContext from "@/hooks/useContext"
import { CompanyContext } from "@/context/CompanyContext"
import { Toaster, toast } from "sonner"
import { AppContext } from "@/context/AppProvider"
import useMapConnect from "@/hooks/useMapConnect"
import { useLocalStorage } from "react-pcp-form"

interface LatLng {
	lat: number
	lng: number
}

interface IMap {
	companyId: number
}

const Map: FC<IMap> = ({ companyId }) => {
	const [directionsService, setDirectionsService] =
		useState<google.maps.DirectionsService>()
	const [home, setHome] = useState<LatLng>()
	const [company, setCompany] = useState<LatLng>()
	const { movementMethod } = useContext(CompanyContext)
	const [travelMode, setTravelMode] =
		useState<google.maps.TravelMode>(movementMethod)

	const [map, setMap] = useState<google.maps.Map | null>(null)
	const [addresses, setAddresses] = useState<Address[]>([])
	const { getAllPoints } = useMap()
	const { user } = useContext(AppContext)
	const [markerSetting, updateMarkerSetting] = useState<boolean>(false)
	const { updateQuantityPoints } = useContext(CompanyContext)
	const { get } = useLocalStorage()

	const request: google.maps.DirectionsRequest = {
		origin: home,
		destination: company,
		travelMode: travelMode,
	}

	const setMarker = (coordinate: LatLng) => {
		const marker = new window.google.maps.Marker({
			position: coordinate,
			map: map as google.maps.Map<Element>,
		})
		marker.addListener("click", () => {
			toast(`Пункт выдачи компании: ${user?.company_name}`)
		})
	}
	const updateAddresses = async () => {
		const addrsss = await getAllPoints(companyId)

		updateQuantityPoints(addrsss.length)
		setAddresses(addrsss)
	}
	useEffect(() => {
		if (addresses.length)
			for (let i = 0; i < addresses.length; i++) {
				const address = addresses[i]
				const { latitude, longtitude } = address

				setMarker({ lat: latitude, lng: longtitude })
			}
	}, [map && addresses.length > 0])

	useEffect(() => {
		updateAddresses()
	}, [])
	const placeMarker = useCallback(
		(location: google.maps.LatLng, map: google.maps.Map) => {
			if (!markerSetting) {
				const marker = new window.google.maps.Marker({
					position: location,
					map: map,
					icon: {
						url: "/home.png",
						scaledSize: new google.maps.Size(20, 20),
					},
				})
				updateMarkerSetting(true)

				marker.addListener("click", () => {
					toast(`Это ваше местоположение`)
				})
				const onRightClick = () => {
					marker.setMap(null)
				}
				marker.addListener("rightclick", onRightClick)
			}
		},
		[markerSetting]
	)
	const initMap = () => {
		const mapInstance = new window.google.maps.Map(
			document.getElementById("map") as HTMLElement,
			{
				center: { lat: 32.764, lng: 80 },
				zoom: 3,
			}
		)

		mapInstance.addListener("click", (event: google.maps.MouseEvent) => {
			placeMarker(event.latLng, mapInstance)
		})

		setMap(mapInstance)
	}

	useMapConnect(initMap)

	useEffect(() => {
		// @ts-ignore
		window["initMap"] = initMap
	}, [])
	useEffect(() => {
		if (window.google) {
			console.log(new window.google.maps.DirectionsService())

			setDirectionsService(new window.google.maps.DirectionsService())
			setHome({ lat: 41.850033, lng: -87.6500523 })
			setCompany({ lat: 34.052235, lng: -118.243683 })
			setTravelMode(movementMethod as google.maps.TravelMode)
		}
	}, [window && window?.google])
	useEffect(() => {
		directionsService &&
			directionsService.route(request, (result, status) => {
				if (status === google.maps.DirectionsStatus.OK) {
					const directionsRenderer = new google.maps.DirectionsRenderer()
					directionsRenderer.setMap(map)
					directionsRenderer.setDirections(result)
				}
			})
	}, [directionsService !== undefined])
	return (
		<div className="relative w-full h-full">
			<div id="map" style={{ height: "100%", width: "100%" }} />
			<Button
				onClick={() => {
					toast("Ваше местоположение успешно сохранено")
				}}
				className="absolute bottom-4 left-4"
			>
				Сохранить
			</Button>
			<Toaster expand toastOptions={{ className: "auth-toast" }} />
		</div>
	)
}

export default Map
