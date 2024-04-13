"use client"
import useMap from "@/hooks/useMap"
import { Address } from "@/types/map.types"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import useContext from "@/hooks/useContext"
import { CompanyContext } from "@/context/CompanyContext"
import { Toaster, toast } from "sonner"
import { AppContext } from "@/context/AppProvider"
import useMapConnect from "@/hooks/useMapConnect"

interface LatLng {
	lat: number
	lng: number
}

function Map(): JSX.Element {
	const [map, setMap] = useState<google.maps.Map | null>(null)
	const [addresses, setAddresses] = useState<Address[]>([])
	const [newAddresses, setNewAddresses] = useState<Address[]>([])
	const { getCompanyAddresses, createAddress } = useMap()
	const { user } = useContext(AppContext)
	const { updateQuantityPoints, quantityPoints } = useContext(CompanyContext)

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
		const addrsss = await getCompanyAddresses()

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

	const placeMarker = (location: google.maps.LatLng, map: google.maps.Map) => {
		const marker = new window.google.maps.Marker({
			position: location,
			map: map,
		})
		marker.addListener("click", () => {
			toast(`Это ваш пункт выдачи`)
		})
		marker.addListener("rightclick", () => {
			setNewAddresses(state => {
				const copy = structuredClone(state)

				copy.splice(newAddresses.length, 1)

				return [...copy]
			})
			updateQuantityPoints(state => state - 1)
			marker.setMap(null)
		})
		setNewAddresses(state => [
			...state,
			{
				latitude: location.lat(),
				longtitude: location.lng(),
			},
		])
		updateQuantityPoints(state => state + 1)
	}

	useMapConnect(initMap)

	useEffect(() => {
		// @ts-ignore
		window["initMap"] = initMap
	}, [])

	return (
		<div className="relative w-full h-full">
			<div id="map" style={{ height: "100%", width: "100%" }} />
			<Button
				onClick={() => {
					if (newAddresses.length) {
						for (let i = 0; i < newAddresses.length; i++) {
							createAddress({
								latitude: newAddresses[i].latitude,
								longtitude: newAddresses[i].longtitude,
							})
						}
						toast("Все пункты выдачи успешно добавлены")
					}
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
