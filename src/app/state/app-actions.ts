import { createAction, props } from "@ngrx/store";
import { ICar } from "../models/car.entity";

export interface IRemoveById {
    id: string;
}


export const removeCarById = createAction(
    "[Product List Remove By Id] remove car",
    props<IRemoveById>(),
);

export const loadCars = createAction(
    "[Product List Load Car List] load cars",
);

export const addNewCar = createAction(
    "[Product List Add New Car List] load new car",
    props<ICar>(),
)