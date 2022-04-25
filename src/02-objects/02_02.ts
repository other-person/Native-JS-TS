export type StreetType = {
    title: string
}
export type AddressType={
    number: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

export type TitleType = {
    title: string
}
export type AddressesType = {
    street: TitleType
}
export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressesType
}
