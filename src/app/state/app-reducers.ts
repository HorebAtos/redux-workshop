import { Action, createReducer, on } from "@ngrx/store";
import { ICar } from "../models/car.entity";
import { addNewCar, loadCars, removeCarById } from "./app-actions";
import { faker } from "@faker-js/faker";
import { uniqueId } from 'lodash';

const productListDefaultState: ICar[] = [];



export const carListReducer = createReducer<ICar[], Action>(
    productListDefaultState,
    on(loadCars, () => generateRandomProductGroup()),
    on(removeCarById, (carList, { id: deleteId }) => {
        const indexToDelete = carList.findIndex((product) => product.id === deleteId);
        const newCarList = [...carList];
        ~indexToDelete && newCarList.splice(indexToDelete, 1);
        return newCarList;
    }),
    on(addNewCar, (carList, newCar) => [...carList, newCar]),
);

const generateRandomProductGroup = (): Array<ICar> => {
    const productsArray: Array<ICar> = [];
    for (let k = 0; k < 20; k++) {
        productsArray.push(generateRandomProduct());
    }
    return productsArray;
}

const generateRandomProduct = (): ICar => {
    return {
        name: faker.vehicle.vehicle(),
        price: parseFloat(faker.commerce.price()),
        model: faker.vehicle.model(),
        id: uniqueId(),
    }
}
