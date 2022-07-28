import { ICar } from "../models/car.entity";
import { IRemoveById } from "./app-actions";

export const deleteCarById = (carList: ICar[], { id: deleteId }: IRemoveById) => {
    const indexToDelete = carList.findIndex((product) => product.id === deleteId);
    const newCarList = [...carList];
    ~indexToDelete && newCarList.splice(indexToDelete, 1);
    return newCarList;
}