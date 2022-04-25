import {CityType, GovernmentBuildingType, HousesType} from "../02-objects/02_02";

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number)=>{
building.budget +=budget;
}

export const repairHouse = (houses: HousesType) => {
houses.repaired = false;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCount: number) => {
building.staffCount -= staffCount;
}

export const  toHireStaff = (building: GovernmentBuildingType, staffCount: number) => {
    building.staffCount += staffCount;
    building.staffCount += staffCount;
}

export const createMessage = (city: Array<HousesType>) => {

    "Hello New York citizens! All of"  + city.citizensNumber + "people."
}