export interface Coords {
	latitude1: number
	longtitude1: number
	latitude2: number
	longtitude2: number
}
export interface Address {
	latitude: number
	longtitude: number
}
export interface AddressDB extends Address {
	id: number
}
export type CompanyAddresses = Address[]
