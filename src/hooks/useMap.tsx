"use client"

import { ACCESS_TOKEN_NAME } from "@/constants/constants"
import mapService from "@/services/map.service"
import { Address, Coords } from "@/types/map.types"
import { useLocalStorage } from "react-pcp-form"

const useMap = () => {
	const { get } = useLocalStorage()
	const getAllPoints = async (companyId: number) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await mapService.getAllPoints(companyId, accessToken)
			return response
		}
	}
	const getDataFromCoords = async (coords: Coords) => {
		const response = await mapService.getDataFromCoords(coords)
		return response
	}
	const createAddress = async (address: Address) => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await mapService.createAddress(address, accessToken)
			return response
		}
	}
	const getCompanyAddresses = async () => {
		const accessToken = get(ACCESS_TOKEN_NAME)
		if (accessToken) {
			const response = await mapService.getCompanyAddresses(accessToken)
			return response
		}
	}
	return { getAllPoints, getDataFromCoords, createAddress, getCompanyAddresses }
}

export default useMap
