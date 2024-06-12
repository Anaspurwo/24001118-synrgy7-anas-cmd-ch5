    // id:1,
    // name: "Hyundai Palisade",
    // price: "Rp800.000.000",
    // startRent:"05/14/2024",
    // finishRent: "05/20/2024",
    // createdAt: "05/14/2024",
    // updatedAt: "05/20/2024"

import { ArrList } from "../__data_mocks__/cars";


interface ArrList {
    id: Number;
    name: string;
    price: string;
    startRent: string;
    finishRent: string;
    createdAt: string;
    updatedAt: string;
}

type idItemType = number;

const filterCars = (arrList: ArrList[], idItem: number) => {
    return ArrList.find(({id}) => id === idItem)
}

export default filterCars;