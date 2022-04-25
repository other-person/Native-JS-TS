import { GovernmentBuildingType} from "../02-objects/02_02";
import { HousesType} from "../02-objects/02_02";


export let getStreetTitleOfTheGovernmentBuilding = (building: Array<GovernmentBuildingType>) => {

return  building.map( b => b.address.street.title)
};

export let getStreetTitleOfTheHouses = (building: Array<HousesType>) => {

    return building.map(h => h.address.street.title)
};

export  function createMessage  (houses: Array<HousesType>)  {

    return houses.map(h => `Hello guys from ${h.address.street.title} `);
}