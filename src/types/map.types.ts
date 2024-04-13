export interface Coords {
	latitude1: number
	longtitude1: number
	latitude2: number
	longtitude2: number
}
export interface Address {
	id: number
	latitude: number
	longtitude: number
}
export type CompanyAddresses = Address[]
