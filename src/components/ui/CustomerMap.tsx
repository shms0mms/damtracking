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
import { MY_HOME_LATITUDE, MY_HOME_LONGITUDE } from "@/constants/constants"

interface LatLng {
	latitude: number
	longitude: number
}
interface LatLng2 {
	lat: number
	lng: number
}

interface IMap {
	companyId: number
}

const Map: FC<IMap> = ({ companyId }) => {
	const { get, set } = useLocalStorage()
	const [home, setHome] = useState<LatLng | undefined>()
	const [company, setCompany] = useState<LatLng>()
	const [map, setMap] = useState<google.maps.Map | null>(null)
	const [addresses, setAddresses] = useState<Address[]>([])
	const { getAllPoints, getDataFromCoords } = useMap()
	const { user } = useContext(AppContext)
	const [markerSetting, updateMarkerSetting] = useState<boolean>(false)
	const {
		updateQuantityPoints,
		movementMethod,
		setDistation,
		setPrice,
		setTime,
	} = useContext(CompanyContext)

	const setMarker = (coordinate: LatLng2) => {
		if (window.google) {
			const marker = new window.google.maps.Marker({
				position: coordinate,
				map: map as google.maps.Map<Element>,
			})

			marker.addListener("click", () => {
				setCompany({
					latitude: marker.getPosition()?.lat() as number,
					longitude: marker.getPosition()?.lng() as number,
				})
				toast(`Пункт выдачи компании: ${user?.company_name}`)
			})
		}
	}
	const getData = async () => {
		const data = await getDataFromCoords({
			latitude1: home?.latitude as number,
			latitude2: company?.latitude as number,
			longtitude1: home?.longitude as number,
			longtitude2: company?.longitude as number,
		})

		setDistation(Math.round(data.distantion))
		setPrice(movementMethod === "CAR" ? data.taxi_price : data.bus_price)
		setTime(movementMethod === "CAR" ? data.taxi_time : data.bus_time)
		setCompany(undefined)
	}

	useEffect(() => {
		if (home && company) getData()
	}, [home, company])
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
				toast("Нажмите на нужный вам пункт выдачи")

				setHome({
					latitude: marker.getPosition()?.lat() as number,
					longitude: marker.getPosition()?.lng() as number,
				})
				marker.addListener("click", () => {
					toast(`Это ваше местоположение`)
				})
				const onRightClick = () => {
					marker.setMap(null)
				}
				marker.addListener("rightclick", onRightClick)

				updateMarkerSetting(true)
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
			if (!markerSetting) placeMarker(event.latLng, mapInstance) // Вот здесь marketSetting не изменяется
		})

		setMap(mapInstance)
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
					if (home) {
						set(MY_HOME_LATITUDE, home.latitude)
						set(MY_HOME_LONGITUDE, home.longitude)
						toast("Ваше местоположение успешно сохранено")
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
