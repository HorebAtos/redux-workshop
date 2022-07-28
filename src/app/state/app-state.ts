import { ActionReducerMap } from "@ngrx/store";
import { ICar } from "../models/car.entity";
import { carListReducer } from "./app-reducers";

export interface IAPP_STATE {
    carList:ICar[];
}

export const APP_STATE:ActionReducerMap<IAPP_STATE> = {
  carList: carListReducer,
}