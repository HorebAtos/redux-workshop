import { createSelector } from "@ngrx/store";
import { IAPP_STATE } from "./app-state";

const stateSliceAccesor = (AppState: IAPP_STATE) => AppState.carList;

export const productListSelector = createSelector(
    stateSliceAccesor, 
    (slice) => slice
)